import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { WS_CLIENT_PORT, WS_CLIENT_URL } from "../helper";

@WebSocketGateway(WS_CLIENT_PORT, { cors: WS_CLIENT_URL })
export class MessageGateway {
	@WebSocketServer() server;
}
