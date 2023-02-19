import { IsNumber } from "class-validator";
import { PickType } from "@nestjs/swagger";
import { UserCredentialsDto } from "auth/model/dto/user-credentials.dto";

export class JwtToken extends PickType(UserCredentialsDto, ["username"]) {
    @IsNumber()
    id: number;

    @IsNumber()
    iat: number;

    @IsNumber()
    exp: number;
}
