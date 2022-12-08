import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { LiveChatService } from './live-chat.service';
import { CreateLiveChatDto } from './dto/create-live-chat.dto';
import { UpdateLiveChatDto } from './dto/update-live-chat.dto';

@WebSocketGateway()
export class LiveChatGateway {
  constructor(private readonly liveChatService: LiveChatService) {}

  @SubscribeMessage('createLiveChat')
  create(@MessageBody() createLiveChatDto: CreateLiveChatDto) {
    return this.liveChatService.create(createLiveChatDto);
  }

  @SubscribeMessage('findAllLiveChat')
  findAll() {
    return this.liveChatService.findAll();
  }

  @SubscribeMessage('findOneLiveChat')
  findOne(@MessageBody() id: number) {
    return this.liveChatService.findOne(id);
  }

  @SubscribeMessage('updateLiveChat')
  update(@MessageBody() updateLiveChatDto: UpdateLiveChatDto) {
    return this.liveChatService.update(updateLiveChatDto.id, updateLiveChatDto);
  }

  @SubscribeMessage('removeLiveChat')
  remove(@MessageBody() id: number) {
    return this.liveChatService.remove(id);
  }
}
