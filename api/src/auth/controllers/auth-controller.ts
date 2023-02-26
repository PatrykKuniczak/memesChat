import { Body, Controller, HttpCode, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "auth/services/auth.service";
import { UserCredentialsDto } from "auth/model/dto/user-credentials.dto";
import { LocalAuthGuard } from "../guards/local-auth.guard";
import {
    ApiBadRequestResponse,
    ApiConflictResponse,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnauthorizedResponse
} from "@nestjs/swagger";

@ApiTags("auth")
@Controller("auth")
class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiCreatedResponse({ description: "Return JWT token" })
    @ApiConflictResponse()
    @ApiBadRequestResponse()
    @Post("register")
    async register(@Body() userCredentialsDto: UserCredentialsDto) {
        return this.authService.register(userCredentialsDto);
    }

    @ApiUnauthorizedResponse()
    @ApiOkResponse({ description: "Return JWT token" })
    @UseGuards(LocalAuthGuard)
    @ApiBadRequestResponse()
    @HttpCode(200)
    @Post("login")
    async login(@Body() userCredentialsDto: UserCredentialsDto) {
        console.log(99);
        return this.authService.login(userCredentialsDto);
    }
}

export default AuthController;
