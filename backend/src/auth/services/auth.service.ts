import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { UserService } from "users/services/user.service";
import { UserCredentialsDto } from "users/model/dto/userCredentials.dto";
import { User } from "users/model/user.entity";

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService
	) {}

	async login(username: string, password: string) {
		const result = await this.validateUser(username, password);

		if (!result) throw new UnauthorizedException();

		return { accessToken: await this.generateJwt(result) };
	}

	async validateUser(username: string, inputPassword: string) {
		const user = await this.userService.findByUsername(username.toLowerCase());

		if (!user) return null;

		const isPasswordValid = await this.comparePasswords(
			inputPassword,
			user.password
		);

		if (isPasswordValid) {
			const { password, ...rest } = user;
			return rest;
		}

		return null;
	}

	async register(loginRegisterUserDto: UserCredentialsDto) {
		const hashedPassword = await bcrypt.hash(loginRegisterUserDto.password, 15);

		const user = await this.userService.create({
			...loginRegisterUserDto,
			password: hashedPassword
		});

		return { accessToken: await this.generateJwt(user) };
	}

	private async generateJwt(user: User) {
		return this.jwtService.signAsync(user);
	}

	private async comparePasswords(password: string, storedPasswordHash: string) {
		return bcrypt.compare(password, storedPasswordHash);
	}
}
