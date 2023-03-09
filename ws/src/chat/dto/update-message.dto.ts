import { CreateMessageDto } from "chat/dto/create-message.dto";
import { PickType } from "@nestjs/mapped-types";

export class UpdateMessageDto extends PickType(CreateMessageDto, ["content"]) {
    id: number;
}
