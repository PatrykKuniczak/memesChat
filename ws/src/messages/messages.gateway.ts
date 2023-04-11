import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
    ConnectedSocket,
    WebSocketServer,
    OnGatewayDisconnect
} from "@nestjs/websockets";
import { UpdateMessageDto } from "messages/dto/update-message.dto";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { Namespace, Socket } from "socket.io";
import { ConfigService } from "@nestjs/config";
import {
    ParseIntPipe,
    UseFilters,
    UsePipes,
    ValidationPipe
} from "@nestjs/common";
import { CreateMessageDto } from "messages/dto/create-message.dto";
import { WebsocketExceptionsFilter } from "exceptions/AxiosExceptionFilter";

@UsePipes(
    new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        stopAtFirstError: true
    })
)
@UseFilters(new WebsocketExceptionsFilter())
@WebSocketGateway(+process.env.GATEWAY_PORT, { namespace: "messages" })
export class MessagesGateway implements OnGatewayDisconnect {
    @WebSocketServer()
    server: Namespace;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService
    ) {
        this.httpService.axiosRef.defaults.baseURL =
            this.configService.get("API_URL");
    }

    handleDisconnect() {
        this.httpService.axiosRef.defaults.headers["Authorization"] = null;
    }

    @SubscribeMessage("create")
    async create(
        @ConnectedSocket() client: Socket,
        @MessageBody() createMessageDto: CreateMessageDto
    ) {
        const result = await firstValueFrom(
            this.httpService.post("messages", createMessageDto, {
                headers: {
                    Authorization: client.handshake.headers.authorization
                }
            })
        );

        this.server.emit("created", result.data);
    }

    @SubscribeMessage("delete")
    async delete(
        @ConnectedSocket() client: Socket,
        @MessageBody("id", ParseIntPipe) id: number
    ) {
        const result = await firstValueFrom(
            this.httpService.delete(`messages/${id}`, {
                headers: {
                    Authorization: client.handshake.headers.authorization
                }
            })
        );

        this.server.emit("deleted", { id, statusCode: result.status });
    }

    @SubscribeMessage("edit")
    async update(
        @ConnectedSocket() client: Socket,
        @MessageBody() updateMessageDto: UpdateMessageDto
    ) {
        const { id, ...rest } = updateMessageDto;

        const result = await firstValueFrom(
            this.httpService.patch(`messages/${id}`, rest, {
                headers: {
                    Authorization: client.handshake.headers.authorization
                }
            })
        );

        this.server.emit("edited", { id, statusCode: result.status });
    }

    @SubscribeMessage("findOne")
    async findOne(
        @ConnectedSocket() client: Socket,
        @MessageBody("id", ParseIntPipe) id: number
    ) {
        const result = await firstValueFrom(
            this.httpService.get(`messages/${id}`, {
                headers: {
                    Authorization: client.handshake.headers.authorization
                }
            })
        );

        client.emit("foundOne", result.data);
    }
}
