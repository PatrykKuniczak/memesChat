import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { UsersService } from "users/services/users.service";
import { UserCredentialsDto } from "users/model/dto/userCredentials.dto";
import { User } from "users/model/users.entity";
import { JwtPayload } from "jsonwebtoken";

@Injectable()
export class AuthService {
  constructor(
      private readonly userService: UsersService,
      private readonly jwtService: JwtService
  ) {
  }

  async login({ username }: UserCredentialsDto) {
    const { id } = await this.userService.findOneBy({ username });

    return { accessToken: await this.generateJwt({ id, username }) };
  }

  async validateUser(userCredentialsDto: UserCredentialsDto) {
    const user = await this.userService.passwordSelect({
      username: userCredentialsDto
    });

    if (user) {
      const isPasswordValid = await this.comparePasswords(
          userCredentialsDto.password,
          user.password
      );

      if (isPasswordValid) {
        return this.userService.findOneBy({
          username: userCredentialsDto.username
        });
      }
    }
  }

  async register(loginRegisterUserDto: UserCredentialsDto) {
    const hashedPassword = await bcrypt.hash(loginRegisterUserDto.password, 15);

    const user = await this.userService.create({
      ...loginRegisterUserDto,
      password: hashedPassword
    });

    const { password, ...rest } = user;

    return { accessToken: await this.generateJwt(rest) };
  }

  async verifyJwt(jwtToken: string, paramsId: number): Promise<JwtPayload> {
    const { id } = await this.jwtService
        .verifyAsync(jwtToken)
        .catch(() => {
          throw new UnauthorizedException();
        });
    if (paramsId !== id) throw new UnauthorizedException();
    return id;
  }

  private async generateJwt(user: User) {
    return this.jwtService.signAsync(user);
  }

  private async comparePasswords(password: string, storedPasswordHash: string) {
    return bcrypt.compare(password, storedPasswordHash);
  }
}
