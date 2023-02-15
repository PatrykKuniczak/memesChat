import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, Length } from "class-validator";

export class JwtToken {
    @ApiProperty()
    @Length(5, 30)
    username: string;

    @IsNumber()
    @ApiProperty()
    id: number;

    @ApiProperty()
    @IsNumber()
    iat: number;

    @ApiProperty()
    @IsNumber()
    exp: number;
}
