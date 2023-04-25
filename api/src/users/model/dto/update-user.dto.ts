import { Allow, IsAlphanumeric, IsString, Length } from "class-validator";
import { Transform } from "class-transformer";
import { UserAvatar } from "usersAvatar/model/usersAvatar.entity";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {
    @Length(5, 30)
    @IsAlphanumeric()
    @IsString()
    @Transform(({ value }) => value.replace(/\s/g, "").toLowerCase())
    username: string;

    @ApiProperty({
        type: "string",
        format: "binary",
        description: "File which contain .jpg/.jpeg/.png extension"
    })
    @Allow()
    userAvatar?: UserAvatar | null;
}
