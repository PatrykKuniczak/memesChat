import {
    ForbiddenException,
    Injectable,
    NotFoundException
} from "@nestjs/common";
import { CreateMessageDto } from "messages/model/dto/create-message.dto";
import { UpdateMessageDto } from "messages/model/dto/update-message.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityNotFoundError, Repository } from "typeorm";
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
        return this.messageRepository.find();
    }

    async findOne(id: number, authorId: number) {
        const message = await this.messageRepository.findOneByOrFail({ id }).catch((error) => {
            if(error instanceof EntityNotFoundError){
                throw new NotFoundException("This message don't exist");
            }
            throw error;
        });

        if(message.authorId !== authorId){
            throw new ForbiddenException("You are not author of the message");
        }

        return message;
    }

    async delete(id: number) {
        const result = (await this.messageRepository.delete(id)).affected;

        if (!result) throw new NotFoundException();
    }

    async update(
        id: number,
        updateMessageDto: UpdateMessageDto,
    ) {
        return this.messageRepository.update(id, updateMessageDto);
    }
}
