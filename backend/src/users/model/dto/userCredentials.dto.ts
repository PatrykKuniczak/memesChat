import { IsAlphanumeric, IsString, Length, Matches } from "class-validator";

export class UserCredentialsDto {
  @Length(5, 30)
  @IsAlphanumeric()
  @IsString()
  username: string;

  @Length(10, 60)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: "Password too weak" })
  @IsString()
  password: string;
}
