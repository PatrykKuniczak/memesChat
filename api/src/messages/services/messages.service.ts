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
import { ConfigService } from "@nestjs/config";

@Injectable()
export class MessagesService {
    private readonly isDevelopment: boolean;

    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>,
        private readonly configService: ConfigService
    ) {
        this.isDevelopment =
            configService.get("DEVELOPMENT") === "true" || false;
    }

    async create(createMessageDto: CreateMessageDto) {
        return this.messageRepository.save(createMessageDto);
    }

    async findAll() {
        return this.messageRepository.find();
    }

    async findOneByIdAndAuthorId(id: number, authorId: number) {
        const message = await this.messageRepository
            .findOneByOrFail({ id })
            .catch(error => {
                if (error instanceof EntityNotFoundError)
                    throw new NotFoundException();

                throw error;
            });

        if (!message.author)
            throw new ForbiddenException(
                "You can't manipulate message with no author"
            );

        if (!this.isDevelopment && message.author.id !== authorId)
            throw new ForbiddenException("You are not author of the message");

        return message;
    }

    async delete(id: number) {
        return this.messageRepository.delete(id).catch(error => {
            throw error;
        });
    }

    async update(id: number, updateMessageDto: UpdateMessageDto) {
        return this.messageRepository
            .update(id, updateMessageDto)
            .catch(error => {
                throw error;
            });
    }
}
