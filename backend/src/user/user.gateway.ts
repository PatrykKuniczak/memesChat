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
import { Server, Socket } from "socket.io";
import { Logger } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { QueryFailedError } from "typeorm";
import isValid, { CLIENT_PORT } from "../helper";
import { ValidationError } from "class-validator";


@WebSocketGateway(CLIENT_PORT, { cors: `http://localhost:${CLIENT_PORT}` })
export class UserGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  private readonly logger = new Logger(UserGateway.name);

  constructor(private readonly userService: UserService) {
  }

  afterInit(): void {
    this.logger.log(`Websocket Gateway initialized.`);
  }

  async handleConnection(@ConnectedSocket() client: Socket) {
    this.logger.verbose(`Connect Socket with id: ${client.id} connected!`);
    this.logger.debug(`Number of connected sockets: ${this.getSocketsAmount()}`);

    return await this.create({ clientId: client.id }).catch(err => err.message);
  }

  async handleDisconnect(@ConnectedSocket() { id }: Socket) {
    let result: string;

    try {
      const { name } = await this.userService.findById(id);
      const { affected } = await this.remove(id);
      affected && (result = `Żegnaj ${name}`);
    } catch (err: any) {
      result = err.message;
    }

    this.logger.verbose(`Disconnected socket with id: ${id}`);
    this.logger.debug(`Number of connected sockets: ${this.getSocketsAmount()}`);

    return this.server.emit("goodbye", result);
  }

  @SubscribeMessage("typing")
  async typing(@MessageBody("isTyping") isTyping: boolean,
               @ConnectedSocket() client: Socket) {
    const { name } = await this.findById(client.id);

    return client.broadcast.emit("typing", { name, isTyping });
  }

  @SubscribeMessage("findAllUsers")
  async findAll(@ConnectedSocket() client: Socket) {
    const allUsers = await this.userService.findAll();

    return client.emit("allUsers", allUsers);
  }

  @SubscribeMessage("editUserName")
  async edit(@ConnectedSocket() client: Socket, @MessageBody("name") name: string) {
    const user = new CreateUserDto();
    user.name = name;
    user.clientId = client.id;

    const result = await isValid(user);

    if (result && result[0] instanceof ValidationError)
      return client.emit("editedUserName", result[0].constraints);

    else
      try {
        const { affected } = await this.userService.edit(user);

        return client.emit("editedUserName", Boolean(affected));
      } catch (err: any) {
        if (err instanceof QueryFailedError)
          return client.emit("editedUserName", "Duplicated username");
      }
  }

  @SubscribeMessage("getUsersAmount")
  async getUsersAmount() {
    return this.server.emit("usersAmount", this.getSocketsAmount());
  }

  private async create(createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  private async remove(clientId: string) {
    return await this.userService.remove(clientId);
  }

  private async findById(clientId: string) {
    return await this.userService.findById(clientId);
  }

  private getSocketsAmount() {
    return this.server.sockets.sockets.size;
  }
}