import { IsAlphanumeric, IsString, Length, Matches } from "class-validator";
import { Transform } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

const regEx =
    /^(?=.*[a-zżźćńółęąś])(?=.*[A-ZŻŹĆĄŚĘŁÓŃ])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\d!@#$%^&* ]*$/;

export class UserCredentialsDto {
    @Length(5, 30)
    @IsAlphanumeric()
    @IsString()
    @Transform(({ value }) => value.replace(/\s/g, "").toLowerCase())
    username: string;

    @Length(10, 60)
    @ApiProperty({ pattern: regEx.toString() })
    @Matches(regEx, {
        message:
            "Password is too weak, must contain 1 small, 1 big letter, 1 number and 1 special character"
    })
    @IsString()
    password: string;
}
