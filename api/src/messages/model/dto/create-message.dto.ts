import {IsBoolean, IsOptional, IsString, Min} from "class-validator";
import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import MessageLength from "messages/model/custom-validators/message-length";
import Url from "messages/model/custom-validators/url";

const urlRegExp =
    /^(https?):\/\/(?:www\.)?[a-zA-Z]{2,}\.[a-z]{2,5}(?!.*(\/{2}|https?|:|\.| )).*$/;

export class CreateMessageDto {
    @MessageLength("isImage", 1, 500)
    @Url("isImage", urlRegExp)
    @IsString()
    @ApiProperty({
        pattern: urlRegExp.toString(),
        description:
            "If isImage is true, then pattern must be use, otherwise it must be greater than 1 and less than 500"
    })
    content: string;

    @IsBoolean()
    readonly isImage: boolean;

    @ApiHideProperty()
    @IsOptional()
    @Min(1)
    authorId?: number;
}
