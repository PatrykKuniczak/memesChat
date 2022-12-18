import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { MessageService } from "./message.service";
import { CreateMessageDto } from "./dto/create-message.dto";
import { UpdateMessageDto } from "./dto/update-message.dto";
import { Namespace, Socket } from "socket.io";


@WebSocketGateway({ namespace: "message" })
export class MessageGateway {
  @WebSocketServer()
  server: Namespace;

  constructor(private readonly messageService: MessageService) {
  }

  @SubscribeMessage("create")
  async create(@ConnectedSocket() client: Socket, @MessageBody() createMessageDto: CreateMessageDto) {
    const message = await this.messageService.create(createMessageDto);
    return client.emit("created", message);
  }

  @SubscribeMessage("findAll")
  async findAll(@ConnectedSocket() client: Socket) {
    const allMessages = await this.messageService.findAll();

    client.emit("allMessages", allMessages);
  }

  @SubscribeMessage("update")
  async update(@ConnectedSocket() client: Socket, @MessageBody() updateMessageDto: UpdateMessageDto) {
    const { affected } = await this.messageService.update(updateMessageDto.id, updateMessageDto);
    return client.emit("updated", Boolean(affected));
  }

  @SubscribeMessage("remove")
  async remove(@ConnectedSocket() client: Socket, @MessageBody() id: number | string) {
    const { affected } = await this.messageService.remove(id);
    return client.emit("removed", Boolean(affected));
  }
}