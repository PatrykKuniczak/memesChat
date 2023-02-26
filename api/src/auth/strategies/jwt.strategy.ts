import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtPayload } from "jsonwebtoken";
import { UsersService } from "users/services/users.service";

export interface AuthJwtPayload extends JwtPayload {
    id: number;
    username: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly configService: ConfigService,
        private readonly userService: UsersService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get("JWT_SECRET")
        });
    }

    async validate(jwtPayload: AuthJwtPayload) {
        await this.userService.findOne(jwtPayload.id);

        return jwtPayload;
    }
}
