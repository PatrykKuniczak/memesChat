import { IsAlphanumeric, IsString, Length } from "class-validator";
import {UserAvatar} from "usersAvatar/model/usersAvatar.entity";
import { Transform } from "class-transformer";

export class UpdateUserDto {
  @Length(5, 30)
  @IsAlphanumeric()
  @IsString()
  @Transform(({ value }) => value.replace(/\s/g, "").toLowerCase())
  username: string;

  userAvatar?: UserAvatar
}
