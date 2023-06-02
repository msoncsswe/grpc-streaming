import { mergedRegistry } from "./server";

const metricsController = {
    getMetrics: async(req, res, next) => {
        const metrics = await mergedRegistry.metrics();

    }
}

/* data to send back:

{
    grpc_server_started_total: <num>,
    grpc_server_handled_total: <num>,
    histogram: {
        grpc_server_handling_seconds_bucket: {
            0.001: {
                type: <type>,
                service: <service>,
                method: <method>,
            }
        }
    }
}


metrics below:

rpc_server_started_total{grpc_type="unary",grpc_service="chat.ChatService",grpc_method="SendChat",grpc_path="/chat.ChatService/SendChat"}
2
grpc_server_handled_total{grpc_type="unary",grpc_service="chat.ChatService",grpc_method="SendChat",grpc_path="/chat.ChatService/SendChat",grpc_code="OK"}
2

histogram:
# TYPE grpc_server_handling_seconds histogram
grpc_server_handling_seconds_bucket{le="0.001",grpc_type="unary",grpc_service="chat.ChatService",grpc_method="SendChat",grpc_path="/chat.ChatService/SendChat",grpc_code="OK"}
2
grpc_server_handling_seconds_bucket{le="0.004",grpc_type="unary",grpc_service="chat.ChatService",grpc_method="SendChat",grpc_path="/chat.ChatService/SendChat",grpc_code="OK"}
2
grpc_server_handling_seconds_bucket{le="0.016",grpc_type="unary",grpc_service="chat.ChatService",grpc_method="SendChat",grpc_path="/chat.ChatService/SendChat",grpc_code="OK"}
2
grpc_server_handling_seconds_bucket{le="0.064",grpc_type="unary",grpc_service="chat.ChatService",grpc_method="SendChat",grpc_path="/chat.ChatService/SendChat",grpc_code="OK"}
2
grpc_server_handling_seconds_bucket{le="0.256",grpc_type="unary",grpc_service="chat.ChatService",grpc_method="SendChat",grpc_path="/chat.ChatService/SendChat",grpc_code="OK"}
2
grpc_server_handling_seconds_bucket{le="1.024",grpc_type="unary",grpc_service="chat.ChatService",grpc_method="SendChat",grpc_path="/chat.ChatService/SendChat",grpc_code="OK"}
2
grpc_server_handling_seconds_bucket{le="4.096",grpc_type="unary",grpc_service="chat.ChatService",grpc_method="SendChat",grpc_path="/chat.ChatService/SendChat",grpc_code="OK"}
2
grpc_server_handling_seconds_bucket{le="16.384",grpc_type="unary",grpc_service="chat.ChatService",grpc_method="SendChat",grpc_path="/chat.ChatService/SendChat",grpc_code="OK"}
2
grpc_server_handling_seconds_bucket{le="65.536",grpc_type="unary",grpc_service="chat.ChatService",grpc_method="SendChat",grpc_path="/chat.ChatService/SendChat",grpc_code="OK"}
2
grpc_server_handling_seconds_bucket{le="262.144",grpc_type="unary",grpc_service="chat.ChatService",grpc_method="SendChat",grpc_path="/chat.ChatService/SendChat",grpc_code="OK"}
2
grpc_server_handling_seconds_bucket{le="1048.576",grpc_type="unary",grpc_service="chat.ChatService",grpc_method="SendChat",grpc_path="/chat.ChatService/SendChat",grpc_code="OK"}
2
grpc_server_handling_seconds_bucket{le="4194.304",grpc_type="unary",grpc_service="chat.ChatService",grpc_method="SendChat",grpc_path="/chat.ChatService/SendChat",grpc_code="OK"}
2
grpc_server_handling_seconds_bucket{le="+Inf",grpc_type="unary",grpc_service="chat.ChatService",grpc_method="SendChat",grpc_path="/chat.ChatService/SendChat",grpc_code="OK"}
2
grpc_server_handling_seconds_sum{grpc_type="unary",grpc_service="chat.ChatService",grpc_method="SendChat",grpc_path="/chat.ChatService/SendChat",grpc_code="OK"}
0.000954917
grpc_server_handling_seconds_count{grpc_type="unary",grpc_service="chat.ChatService",grpc_method="SendChat",grpc_path="/chat.ChatService/SendChat",grpc_code="OK"}
2
*/