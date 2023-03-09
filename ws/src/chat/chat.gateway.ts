import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    ConnectedSocket,
    WebSocketServer
} from "@nestjs/websockets";
import { UpdateMessageDto } from "chat/dto/update-message.dto";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { Server, Socket } from "socket.io";
import { ConfigService } from "@nestjs/config";
import { ParseIntPipe, UseFilters } from "@nestjs/common";
import { AxiosExceptionFilter } from "filters/AxiosExceptionFilter";
import { CreateMessageDto } from "chat/dto/create-message.dto";

@UseFilters(new AxiosExceptionFilter())
@WebSocketGateway(+process.env.GATEWAY_PORT)
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService
    ) {
        this.httpService.axiosRef.defaults.baseURL =
            this.configService.get("API_URL");
    }

    handleConnection(@ConnectedSocket() client: Socket) {
        this.httpService.axiosRef.defaults.headers["Authorization"] =
            client.handshake.headers.authorization;
    }

    handleDisconnect() {
        this.httpService.axiosRef.defaults.headers["Authorization"] = null;
    }

    @SubscribeMessage("createMessage")
    async create(@MessageBody() createMessageDto: CreateMessageDto) {
        const result = await firstValueFrom(
            this.httpService.post("/messages", createMessageDto)
        );

        this.server.emit("createdMessage", result.data);
    }

    @SubscribeMessage("findAllMessages")
    async findAll(@ConnectedSocket() client: Socket) {
        const result = await firstValueFrom(this.httpService.get("/messages"));

        client.emit("foundMessages", result.data);
    }

    @SubscribeMessage("deleteMessage")
    async delete(@MessageBody("id", ParseIntPipe) id: number) {
        const result = await firstValueFrom(
            this.httpService.delete(`/messages/${id}`)
        );

        this.server.emit("deletedMessage", { id, statusCode: result.status });
    }

    @SubscribeMessage("editMessage")
    async update(@MessageBody() updateMessageDto: UpdateMessageDto) {
        const { id, ...rest } = updateMessageDto;

        const result = await firstValueFrom(
            this.httpService.patch(`/messages/${id}`, rest)
        );

        this.server.emit("editedMessage", { statusCode: result.status });
    }

    @SubscribeMessage("typing")
    async typing(
        @ConnectedSocket() client: Socket,
        @MessageBody("isTyping") isTyping: boolean,
        @MessageBody("username") username: string
    ) {
        client.broadcast.emit("typing", { username, isTyping });
    }
}
