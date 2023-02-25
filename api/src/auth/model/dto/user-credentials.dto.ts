import { IsAlphanumeric, IsString, Length, Matches } from "class-validator";
import { Transform } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).+$/;

export class UserCredentialsDto {
    @Length(5, 30)
    @IsAlphanumeric()
    @IsString()
    @Transform(({ value }) => value.replace(/\s/g, "").toLowerCase())
    username: string;

    @Length(10, 60)
    @ApiProperty({ pattern: regExp.toString() })
    @Matches(regExp, {
        message:
            "Password is too weak, must contain 1 small, 1 big letter and 1 number or 1 special character"
    })
    @IsString()
    password: string;
}
