import { CreateMessageDto } from "messages/dto/create-message.dto";
import { PickType } from "@nestjs/mapped-types";
import {IsNumber} from "class-validator";

export class UpdateMessageDto extends PickType(CreateMessageDto, ["content"]) {
    @IsNumber()
    id: number;
}
