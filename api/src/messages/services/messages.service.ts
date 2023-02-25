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
        return this.messageRepository.find();
    }

    async findOne(id: number) {
        return this.messageRepository.findOneByOrFail({ id }).catch(() => {
            throw new NotFoundException();
        });
    }

    async delete(id: number) {
        const result = (await this.messageRepository.delete(id)).affected;

        if (!result) throw new NotFoundException();
    }

    async update(
        id: number,
        updateMessageDto: UpdateMessageDto,
        isImage: boolean
    ) {
        const messageIsImage = updateMessageDto.isImage;

        if (!isImage && !messageIsImage)
            return this.messageRepository.update(id, updateMessageDto);
        else if (messageIsImage)
            throw new ForbiddenException(
                "You can't change message type to image"
            );
        else throw new ForbiddenException("You can't update an image");
    }
}
