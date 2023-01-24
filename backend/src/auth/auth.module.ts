import { Module } from "@nestjs/common";
import { UserModule } from "users/user.module";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./services/auth.service";
import { LocalStrategy } from "./strategies/local.strategy";
import AuthController from "./controllers/auth-controller";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtStrategy } from "./strategies/jwt.strategy";

@Module({
	imports: [
		UserModule,
		PassportModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => ({
				secret: configService.get("JWT_SECRET"),
				signOptions: { expiresIn: "30d" }
			}),
			inject: [ConfigService]
		})
	],
	controllers: [AuthController],
	providers: [AuthService, LocalStrategy, JwtStrategy],
	exports: [AuthService]
})
export class AuthModule {}
