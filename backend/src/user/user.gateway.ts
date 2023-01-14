import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";
import { WS_CLIENT_PORT, WS_CLIENT_URL } from "../helper";

@WebSocketGateway(WS_CLIENT_PORT, { cors: WS_CLIENT_URL })
export class UserGateway {
	@WebSocketServer() server: Server;
}
