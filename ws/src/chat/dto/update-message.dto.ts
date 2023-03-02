import { PartialType } from "@nestjs/mapped-types";
import { CreateMessageDto } from "chat/dto/create-message.dto";

export class UpdateMessageDto extends PartialType(CreateMessageDto) {
    id: number;
}
