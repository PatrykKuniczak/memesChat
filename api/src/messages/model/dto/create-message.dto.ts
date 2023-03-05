import { IsBoolean, IsOptional, Min } from "class-validator";
import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import MessageLengthValidator from "messages/model/custom-validators/message-length.validator";
import UrlValidator from "messages/model/custom-validators/url-validator";

const regExp = /^(https?):\/\/(?:www\.)?[a-zA-Z]{2,}\.[a-z]{2,5}(?!.*(\/{2}|https?|:|\.| )).*$/;

export class CreateMessageDto {
    @MessageLengthValidator("isImage", 1, 500)
    @UrlValidator("isImage", regExp)
    @ApiProperty({
        pattern: regExp.toString(),
        description:
            "If isImage is true, then pattern must be use, otherwise it must be greater than 1 and less than 500"
    })
    content: string;

    @IsOptional()
    @IsBoolean()
    readonly isImage?: boolean;

    @ApiHideProperty()
    @IsOptional()
    @Min(1)
    authorId: number;
}
