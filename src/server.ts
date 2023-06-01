import { createServer } from "nice-grpc";
import { ChatServiceDefinition } from "../proto/compiled_proto/chat";
import { chatServiceImpl } from "./chatServiceImp";

const server = createServer();

server.add(ChatServiceDefinition, chatServiceImpl);
await server.listen('0.0.0.0:8080')