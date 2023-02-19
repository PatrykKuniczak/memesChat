import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { UsersService } from "users/services/users.service";
import { User } from "users/model/users.entity";
import { UserCredentialsDto } from "auth/model/dto/user-credentials.dto";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async login(userCredentialsDto: UserCredentialsDto) {
        const { id } = await this.userService
            .findOneByUsername(userCredentialsDto.username)
            .catch(() => {
                throw new UnauthorizedException();
            });

        return this.generateJwt({ ...userCredentialsDto, id });
    }

    async validateUser(userCredentialsDto: UserCredentialsDto) {
        const { password } = await this.userService
            .selectPassword(userCredentialsDto.username)
            .catch(() => {
                throw new UnauthorizedException();
            });

        const isPasswordValid = await this.comparePasswords(
            userCredentialsDto.password,
            password
        );

        if (!isPasswordValid) throw new UnauthorizedException();

        return userCredentialsDto;
    }

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

    private generateJwt(user: User) {
        const jwtToken = this.jwtService.sign(user);

        return { accessToken: jwtToken };
    }

    private async comparePasswords(
        password: string,
        storedPasswordHash: string
    ) {
        return bcrypt.compare(password, storedPasswordHash);
    }
}
