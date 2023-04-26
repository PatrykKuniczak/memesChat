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

    async create(createMessageDto: CreateMessageDto, userId: number) {
        if (createMessageDto.authorId !== userId)
            throw new ForbiddenException(
                "You can't create a message for other user"
            );

        return this.messageRepository.save(createMessageDto);
    }

    async findAll() {
        return this.messageRepository.find();
    }

    async findOne(id: number) {
        return this.messageRepository.findOneByOrFail({ id }).catch(error => {
            if (error instanceof EntityNotFoundError)
                throw new NotFoundException();

            throw error;
        });
    }

    async delete(id: number, userId: number) {
        const message = await this.findOne(id);

        if (message.author.id !== userId)
            throw new ForbiddenException("You aren't author of a message");

        return this.messageRepository.delete(id).catch(error => {
            throw error;
        });
    }

    async update(
        id: number,
        userId: number,
        updateMessageDto: UpdateMessageDto
    ) {
        if (updateMessageDto.authorId !== userId)
            throw new ForbiddenException("You aren't author of a message");

        const currentMessage = await this.findOne(id);

        if (currentMessage.isImage)
            throw new ForbiddenException(
                "You can't update a message which is an image"
            );

        return this.messageRepository
            .update(id, updateMessageDto)
            .catch(error => {
                throw error;
            });
    }
}
