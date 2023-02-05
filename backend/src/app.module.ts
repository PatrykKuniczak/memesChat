import {
	MiddlewareConsumer,
	Module,
	NestModule,
	RequestMethod
} from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import typeOrmConfig from "database/config/typeorm.config";
import { AuthModule } from "auth/auth.module";
import { UsersModule } from "users/users.module";
import AuthController from "./auth/controllers/auth-controller";
import { UsersAvatarModule } from "./usersAvatar/usersAvatar.module";

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		TypeOrmModule.forRootAsync(typeOrmConfig),
		AuthModule,
		UsersModule,
		UsersAvatarModule
	],
	controllers: [AuthController],
	exports: [TypeOrmModule]
})
export class AppModule {
}
