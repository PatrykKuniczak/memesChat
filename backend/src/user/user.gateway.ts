import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from "@nestjs/websockets";
import { UserService } from "./user.service";
import { Namespace, Socket } from "socket.io";
import { Logger } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";


@WebSocketGateway({ namespace: "user" })
export class UserGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  server: Namespace;

  private readonly logger = new Logger(UserGateway.name);

  constructor(private readonly userService: UserService) {
  }

  afterInit(): void {
    this.logger.log(`Websocket Gateway initialized.`);
  }

  async handleConnection(@ConnectedSocket() client: Socket) {
    const sockets = this.server.sockets;
    this.logger.log(`WS Client with id: ${client.id} connected!`);
    this.logger.debug(`Number of connected sockets: ${sockets.size}`);

    await this.create({ clientId: client.id });
    return client.emit("hello", `Witaj ${client.id}`);
  }

  async handleDisconnect(@ConnectedSocket() client: Socket) {
    const sockets = this.server.sockets;
    await this.remove(client.id);

    this.logger.log(`Disconnected socket id: ${client.id}`);
    this.logger.debug(`Number of connected sockets: ${sockets.size}`);

    this.server.emit("goodbye", `goodbye ${client.id}`);
    // TODO - remove client from poll and send `participants_updated` event to remaining clients
  }

  @SubscribeMessage("join")
  joinRoom(@MessageBody("name") name: string,
           @ConnectedSocket() client: Socket) {
    return this.userService.identify(+client.id);
  }

  @SubscribeMessage("typing")
  async typing(@MessageBody("isTyping") isTyping: boolean,
               @ConnectedSocket() client: Socket) {
    const name = this.userService.findByName(+client.id);

    return client.broadcast.emit("typing", { name, isTyping });
  }

  @SubscribeMessage("findAll")
  async findAll(@ConnectedSocket() client: Socket) {
    const allUsers = await this.userService.findAll();

    return client.emit("allUsers", allUsers);
  }

  private async create(createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  private async remove(clientId: string) {
    await this.userService.remove(clientId);
  }
}