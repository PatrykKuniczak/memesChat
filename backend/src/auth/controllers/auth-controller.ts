import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "auth/services/auth.service";
import { UserCredentialsDto } from "users/model/dto/userCredentials.dto";
import { LocalAuthGuard } from "../guards/local-auth.guard";

@Controller("auth")
class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post("register")
  async register(@Body() userCredentialsDto: UserCredentialsDto) {
    return this.authService.register(userCredentialsDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Body() userCredentialsDto: UserCredentialsDto) {
    return this.authService.login(userCredentialsDto);
  }
}

export default AuthController;
