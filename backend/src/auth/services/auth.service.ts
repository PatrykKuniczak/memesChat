import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { UserService } from "users/services/user.service";
import { IUser } from "users/model/user.interface";
import { UserCridentialsDto } from "users/model/dto/userCridentials.dto";

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService
	) {}

	async login(username: string, password: string) {
		const result = await this.validateUser(username, password);

		if (!result) throw new UnauthorizedException();

		return {
			access_token: await this.generateJwt(result)
		};
	}

	async validateUser(username: string, inputPassword: string) {
		const user = await this.userService.findByUsername(username.toLowerCase());

		if (!user) return null;

		const comparedPassword = await this.comparePasswords(
			inputPassword,
			user.password
		);

		if (comparedPassword) {
			const { password, ...rest } = user;
			return rest;
		}

		return null;
	}

	async register(loginRegisterUserDto: UserCridentialsDto) {
		const hashedPassword = await bcrypt.hash(loginRegisterUserDto.password, 15);

		const user = await this.userService.create({
			...loginRegisterUserDto,
			password: hashedPassword
		});

		return await this.generateJwt(user);
	}

	private async generateJwt(user: IUser) {
		return this.jwtService.signAsync(user);
	}

	private async comparePasswords(password: string, storedPasswordHash: string) {
		return bcrypt.compare(password, storedPasswordHash);
	}
}
