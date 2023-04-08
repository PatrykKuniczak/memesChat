import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { UsersService } from "users/services/users.service";
import { UserCredentialsDto } from "auth/model/dto/user-credentials.dto";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async register(userCredentialsDto: UserCredentialsDto) {
        userCredentialsDto.username = userCredentialsDto.username
            .replace(/\s/g, "")
            .toLowerCase();

        const hashedPassword = await bcrypt.hash(
            userCredentialsDto.password,
            10
        );

        const user = await this.userService.create({
            ...userCredentialsDto,
            password: hashedPassword
        });

        const { password, ...rest } = user;

        return this.generateJwt(rest);
    }

    async login(userCredentialsDto: UserCredentialsDto) {
        const { id, username } = await this.userService.findOneByUsername(
            userCredentialsDto.username
        );

        return this.generateJwt({ id, username });
    }

    async validateUser(userCredentialsDto: UserCredentialsDto) {
        const { password } = await this.userService.selectPassword(
            userCredentialsDto.username
        );

        const isPasswordValid = await this.comparePasswords(
            userCredentialsDto.password,
            password
        );

        if (!isPasswordValid) throw new UnauthorizedException();

        return userCredentialsDto;
    }

    private generateJwt(payload: { id: number, username: string }) {
        const jwtToken = this.jwtService.sign(payload);

        return { accessToken: jwtToken };
    }

    private async comparePasswords(
        password: string,
        storedPasswordHash: string
    ) {
        return bcrypt.compare(password, storedPasswordHash);
    }
}
