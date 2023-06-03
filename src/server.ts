import { createServer } from "nice-grpc";
import { ChatServiceDefinition } from "../proto/chat"
import { chatServiceImpl } from "./chatServiceImp";
//registry here
import { register as globalRegistry, Registry} from "prom-client";
import { registry as niceGrpcRegistry, prometheusServerMiddleware } from "nice-grpc-prometheus";
import express from "express";

export const mergedRegistry = Registry.merge([globalRegistry, niceGrpcRegistry]);


const server = createServer().use(prometheusServerMiddleware())


server.add(ChatServiceDefinition, chatServiceImpl);
server.listen('0.0.0.0:8080').then(response => console.log(`gRPC port listening to ${response}`))

//express functionality to send metrics to prometheus
const app = express();
const port = 3500;

app.get('/data', async(req, res) => {
    const metrics = await mergedRegistry.getMetricsAsJSON();
    return res.status(200).send(metrics)
})

app.listen(port, () => console.log(`listening on port ${port}`))