import {
    ConnectedSocket,
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer
} from "@nestjs/websockets";
import {
    ParseIntPipe,
    UseFilters,
    UsePipes,
    ValidationPipe
} from "@nestjs/common";
import { WebsocketExceptionsFilter } from "exceptions/AxiosExceptionFilter";
import { Namespace, Socket } from "socket.io";
import { HttpService } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";
import { firstValueFrom } from "rxjs";
import { TypingDto } from "messages/dto/typing.dto";
import { ENABLE_ALL_CORS } from "main";

@UsePipes(
    new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        stopAtFirstError: true
    })
)
@UseFilters(new WebsocketExceptionsFilter())
@WebSocketGateway(+process.env.GATEWAY_PORT, {
    namespace: "users",
    cors: ENABLE_ALL_CORS ? "*" : process.env.CLIENT_URL
})
export class UsersGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Namespace;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService
    ) {
        this.httpService.axiosRef.defaults.baseURL =
            this.configService.get("API_URL");
    }

    handleConnection(@ConnectedSocket() client: Socket) {
        const onlineUsersAmount = this.server.sockets.size;
        console.log("Połączono Users")
        this.server.emit("onlineUsersAmount", { onlineUsersAmount });
    }

    handleDisconnect() {
        this.httpService.axiosRef.defaults.headers["Authorization"] = null;
        console.log("Rozłączono Users")

        const onlineUsersAmount = this.server.sockets.size;

        this.server.emit("onlineUsersAmount", { onlineUsersAmount });
    }

    @SubscribeMessage("findOne")
    async findOne(
        @ConnectedSocket() client: Socket,
        @MessageBody("id", ParseIntPipe) id: number
    ) {
        const result = await firstValueFrom(
            this.httpService.get(`users/${id}`, {
                headers: {
                    Authorization: client.handshake.headers.authorization
                }
            })
        );

        client.emit("foundOne", result.data);
    }

    @SubscribeMessage("typing")
    async typing(
        @ConnectedSocket() client: Socket,
        @MessageBody() typingDto: TypingDto
    ) {
        const { username, isTyping } = typingDto;

        client.broadcast.emit("typing", { username, isTyping });
    }
}
