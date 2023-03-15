import { CreateMessageDto } from "messages/model/dto/create-message.dto";
import { PickType} from "@nestjs/swagger";

export class UpdateMessageDto extends PickType(CreateMessageDto, ["content"]) {}
