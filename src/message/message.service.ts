import { Injectable } from "@nestjs/common";
import { CreateMessageDto } from "./dto/create-message.dto";
import { UpdateMessageDto } from "./dto/update-message.dto";
import { Message } from "./entities/message.entity";
import { InjectEntityManager } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";


@Injectable()
export class MessageService {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {
  }

  create(createMessageDto: CreateMessageDto) {
    return this.entityManager.save(this.entityManager.create(Message, createMessageDto));
  }

  findAll() {
    return this.entityManager.find(Message);
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return this.entityManager.update(Message, id, updateMessageDto);
  }

  remove(id: number | string) {
    return this.entityManager.delete(Message, id);
  }
}