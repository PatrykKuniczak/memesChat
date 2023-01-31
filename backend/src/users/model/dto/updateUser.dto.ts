import { IsAlphanumeric, IsString, Length } from "class-validator";

export class UpdateUserDto {
  @Length(5, 30)
  @IsAlphanumeric()
  @IsString()
  username: string;
}
