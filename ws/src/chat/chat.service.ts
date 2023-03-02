import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from 'chat/dto/create-message.dto';
import { UpdateMessageDto } from 'chat/dto/update-message.dto';

@Injectable()
export class ChatService {
  create(createMessageDto: CreateMessageDto) {
    return 'This action adds a new chat';
  }

  findAll() {
    return `This action returns all chat`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
