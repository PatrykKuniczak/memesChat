import { IsAlphanumeric, IsString, Length, Matches } from "class-validator";
import { Transform } from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class UserCredentialsDto {
  @ApiProperty()
  @Length(5, 30)
  @IsAlphanumeric()
  @IsString()
  @Transform(({ value }) => value.replace(/\s/g, "").toLowerCase())
  username: string;

  @ApiProperty()
  @Length(10, 60)
  @Matches(/^(?=.*[a-zżźćńółęąś])(?=.*[A-ZŻŹĆĄŚĘŁÓŃ])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\d!@#$%^&* ]*$/,
    { message: "Password is too weak, must contain 1 small, 1 big letter, 1 number and 1 special character" })
  @IsString()
  password: string;
}
