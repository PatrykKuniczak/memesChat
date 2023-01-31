import { IsAlphanumeric, IsString, Length } from "class-validator";
import {UserAvatar} from "../../../usersAvatar/model/usersAvatar.entity";

export class UpdateUserDto {
  @Length(5, 30)
  @IsAlphanumeric()
  @IsString()
  username: string;
  userAvatar?: UserAvatar
}
