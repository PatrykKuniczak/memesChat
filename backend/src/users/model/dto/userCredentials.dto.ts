import { IsAlphanumeric, IsString, Length, Matches } from "class-validator";

export class UserCredentialsDto {
  @Length(5, 30)
  @IsAlphanumeric()
  @IsString()
  username: string;

  @Length(10, 60)
  @Matches(/^(?=.*[a-zżźćńółęąś])(?=.*[A-ZŻŹĆĄŚĘŁÓŃ])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\d!@#$%^&*]*$/,
    { message: "Password is too weak, must contain 1 small, 1 big letter, 1 number and 1 special character" })
  @IsString()
  password: string;
}
