import {WebSocketGateway, SubscribeMessage, MessageBody} from '@nestjs/websockets';
import {ChatService} from './chat.service';
import {CreateMessageDto} from 'chat/dto/create-message.dto';
import {UpdateMessageDto} from 'chat/dto/update-message.dto';
import * as dotenv from "dotenv";

dotenv.config({path: ".env"});

const WS_GATEWAY_PORT = +process.env.WS_GATEWAY_PORT;

@WebSocketGateway(WS_GATEWAY_PORT)
export class ChatGateway {
    constructor(private readonly chatService: ChatService) {
    }

    @SubscribeMessage('createChat')
    create(@MessageBody() createChatDto: CreateMessageDto) {
        return this.chatService.create(createChatDto);
    }

    @SubscribeMessage('findAllChat')
    findAll() {
        return this.chatService.findAll();
    }

    @SubscribeMessage('updateChat')
    update(@MessageBody() updateChatDto: UpdateMessageDto) {
        return this.chatService.update(updateChatDto.id, updateChatDto);
    }

    @SubscribeMessage('removeChat')
    remove(@MessageBody() id: number) {
        return this.chatService.remove(id);
    }
}
