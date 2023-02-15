import {Injectable, UnauthorizedException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import {UsersService} from "users/services/users.service";
import {UserCredentialsDto} from "auth/model/dto/user-credentials.dto";
import {User} from "users/model/users.entity";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ) {
    }

    async login({username}: UserCredentialsDto) {
        username = username.replace(/\s/g, "").toLowerCase();

        const {id} = await this.userService.findOneByUsername(username);

        return this.generateJwt({id, username})
    }

    async validateUser(userCredentialsDto: UserCredentialsDto) {
        const {password} = await this.userService.passwordSelect(userCredentialsDto.username).catch(() => {
            throw new UnauthorizedException()
        });

        const isPasswordValid = await this.comparePasswords(
            userCredentialsDto.password,
            password
        );

        if (!isPasswordValid)
            throw new UnauthorizedException();

        return userCredentialsDto;
    }

    async register(loginRegisterUserDto: UserCredentialsDto) {
        loginRegisterUserDto.username = loginRegisterUserDto.username
            .replace(/\s/g, "").toLowerCase();

        const hashedPassword = await bcrypt.hash(loginRegisterUserDto.password, 10);

        const user = await this.userService.create({
            ...loginRegisterUserDto,
            password: hashedPassword
        });

        const {password, ...rest} = user;

        return this.generateJwt(rest)
    }

    private generateJwt(user: User) {
        const jwtToken = this.jwtService.sign(user);

        return {accessToken: jwtToken}
    }

    private async comparePasswords(password: string, storedPasswordHash: string) {
        return bcrypt.compare(password, storedPasswordHash);
    }
}
