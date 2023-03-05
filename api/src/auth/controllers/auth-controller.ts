import { Body, Controller, HttpCode, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "auth/services/auth.service";
import { UserCredentialsDto } from "auth/model/dto/user-credentials.dto";
import { LocalAuthGuard } from "../guards/local-auth.guard";
import {
    ApiBadRequestResponse,
    ApiConflictResponse,
    ApiCreatedResponse,
    ApiUnauthorizedResponse,
    ApiOkResponse,
    ApiTags,
    ApiNotFoundResponse
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

    @ApiOkResponse({ description: "Return JWT token" })
    @ApiBadRequestResponse()
    @ApiUnauthorizedResponse()
    @ApiNotFoundResponse()
    @UseGuards(LocalAuthGuard)
    @HttpCode(200)
    @Post("login")
    async login(@Body() userCredentialsDto: UserCredentialsDto) {
        return this.authService.login(userCredentialsDto);
    }
}

export default AuthController;
