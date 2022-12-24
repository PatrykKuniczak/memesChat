import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { MessageService } from "./message.service";
import { CreateMessageDto } from "./dto/create-message.dto";
import { UpdateMessageDto } from "./dto/update-message.dto";
import { Socket } from "socket.io";
import { UserService } from "../user/user.service";


@WebSocketGateway()
export class MessageGateway {
  @WebSocketServer() server;

  constructor(private readonly messageService: MessageService, private readonly userService: UserService) {
  }

  @SubscribeMessage("createMessage")
  async create(@ConnectedSocket() client: Socket, @MessageBody("content") messageContent: string) {
    const { id } = await this.userService.findById(client.id);
    const message: CreateMessageDto = { user: id, content: messageContent };

    const result = await this.messageService.create(message).catch(err => new Error(err.message));

    return client.emit("createdMessage", result);
  }

  @SubscribeMessage("findAllMessages")
  async findAll(@ConnectedSocket() client: Socket) {
    const allMessages = await this.messageService.findAll();

    client.emit("allMessages", allMessages);
  }

  @SubscribeMessage("updateMessage")
  async update(@ConnectedSocket() client: Socket, @MessageBody() updateMessageDto: UpdateMessageDto) {
    const { affected } = await this.messageService.update(updateMessageDto.id, updateMessageDto);

    return client.emit("updatedMessage", Boolean(affected));
  }

  @SubscribeMessage("removeMessage")
  async remove(@ConnectedSocket() client: Socket, @MessageBody("id") id: number | string) {
    const { affected } = await this.messageService.remove(id);

    return client.emit("removedMessage", Boolean(affected));
  }
}