import {Module} from "@nestjs/common";
import {UsersModule} from "users/users.module";
import {PassportModule} from "@nestjs/passport";
import {AuthService} from "./services/auth.service";
import {LocalStrategy} from "./strategies/local.strategy";
import AuthController from "./controllers/auth-controller";
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {JwtStrategy} from "./strategies/jwt.strategy";

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get("JWT_SECRET"),
                signOptions: {expiresIn: "7d"}
            }),
            inject: [ConfigService]
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {
}
