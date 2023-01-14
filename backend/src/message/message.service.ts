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

  async create(createMessageDto: CreateMessageDto) {
    return await this.entityManager.save(this.entityManager.create(Message, createMessageDto));
  }

  async findAll() {
    return await this.entityManager.find(Message);
  }

  async update(id: number, updateMessageDto: UpdateMessageDto) {
    return await this.entityManager.update(Message, id, updateMessageDto);
  }

  async remove(id: number | string) {
    return await this.entityManager.delete(Message, id);
  }
}
