import {IsBoolean, IsString, Length} from "class-validator";

export class TypingDto {
    @IsBoolean()
    isTyping: boolean;

    @Length(5, 30)
    @IsString()
    username: string;
}
