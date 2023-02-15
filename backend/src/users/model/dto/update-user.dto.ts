import {IsAlphanumeric, IsString, Length} from "class-validator";
import { Transform } from "class-transformer";
import { UserAvatar } from "usersAvatar/model/usersAvatar.entity";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateUserDto {
    @ApiProperty()
    @Length(5, 30)
    @IsAlphanumeric()
    @IsString()
    @Transform(({ value }) => value.replace(/\s/g, "").toLowerCase())
    username: string;

    userAvatar: UserAvatar;
}
