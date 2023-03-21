import {IsBoolean, IsString} from "class-validator";

export class CreateMessageDto {
    @IsString()
    content: string;

    @IsBoolean()
    isImage: boolean;
}
