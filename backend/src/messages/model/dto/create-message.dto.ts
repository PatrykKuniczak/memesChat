import { IsBoolean, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import MessageLengthValidator from "messages/model/custom-validators/message-length.validator";
import UrlValidator from "messages/model/custom-validators/url-validator";

const regExp =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.\S{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.\S{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.\S{2,}|www\.[a-zA-Z0-9]+\.\S{2,})/;

export class CreateMessageDto {
    @MessageLengthValidator("isImage", 1, 500)
    @UrlValidator("isImage", regExp)
    @ApiProperty({
        pattern: regExp.toString(),
        description:
            "If isImage is true, then pattern must be use, otherwise it must be greater than 1 and less than 500"
    })
    content: string;

    @IsBoolean()
    isImage: boolean;

    @Min(1)
    authorId: number;
}
