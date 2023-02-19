import {
    ForbiddenException,
    Injectable,
    NotFoundException
} from "@nestjs/common";
import { CreateMessageDto } from "messages/model/dto/create-message.dto";
import { UpdateMessageDto } from "messages/model/dto/update-message.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Message } from "messages/model/message.entity";

@Injectable()
export class MessagesService {
    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>
    ) {}

    async create(createMessageDto: CreateMessageDto) {
        return this.messageRepository.save(createMessageDto);
    }

    async findAll() {
        return this.messageRepository.find({
            relations: {
                author: true
            }
        });
    }

    async findOne(id: number) {
        return this.messageRepository
            .findOneOrFail({
                where: { id },
                relations: { author: true }
            })
            .catch(() => {
                throw new NotFoundException();
            });
    }

    async delete(id: number) {
        const result = (await this.messageRepository.delete(id)).affected;

        if (!result) throw new NotFoundException();
    }

    async update(id: number, updateMessageDto: UpdateMessageDto) {
        const message = await this.findOne(id);
        if (!message.isImage)
            return this.messageRepository.update(id, updateMessageDto);
        else throw new ForbiddenException();
    }
}
