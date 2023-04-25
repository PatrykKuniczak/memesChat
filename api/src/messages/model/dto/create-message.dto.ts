import { IsBoolean, IsString, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import MessageLengthCustomValidator from "messages/model/custom-validators/message-length";
import UrlCustomValidator from "messages/model/custom-validators/url";

const urlRegExp =
    /^(https?):\/\/(?:www\.)?[a-zA-Z]{2,}\.[a-z]{2,5}(?!.*(\/{2}|https?|:|\.| )).*$/;

export class CreateMessageDto {
    @MessageLengthCustomValidator("isImage", 1, 500)
    @UrlCustomValidator("isImage", urlRegExp)
    @IsString()
    @ApiProperty({
        pattern: urlRegExp.toString(),
        description:
            "If isImage is true, then pattern must be use, otherwise it must be greater than 1 and less than 500"
    })
    content: string;

    @IsBoolean()
    readonly isImage: boolean;

    @Min(1)
    authorId: number;
}
