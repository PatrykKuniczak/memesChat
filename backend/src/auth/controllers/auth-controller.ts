import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "auth/services/auth.service";
import { UserCridentialsDto } from "users/model/dto/userCridentials.dto";
import { LocalAuthGuard } from "../guards/local-auth.guard";

@Controller("auth")
class AuthController {
	constructor(private authService: AuthService) {}

	@Post("register")
	async register(@Body() loginRegisterUserDto: UserCridentialsDto) {
		return await this.authService.register(loginRegisterUserDto);
	}

	@UseGuards(LocalAuthGuard)
	@Post("login")
	async login(@Body() { username, password }: UserCridentialsDto) {
		return await this.authService.login(username, password);
	}
}

export default AuthController;
