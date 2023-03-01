import { CreateMessageDto } from "messages/model/dto/create-message.dto";
import { OmitType } from "@nestjs/swagger";

export class UpdateMessageDto extends OmitType(CreateMessageDto, ["authorId"]) {}
