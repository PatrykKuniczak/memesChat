import { IsBoolean, Length } from "class-validator";

export class UpdateMessageDto {
    @Length(1, 500)
    content: string;

    @IsBoolean()
    readonly isImage: boolean;
}
