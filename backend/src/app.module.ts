import {
	MiddlewareConsumer,
	Module,
	NestModule,
	RequestMethod
} from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import typeOrmConfig from "database/config/typeorm.config";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { AuthMiddleware } from "./middleware/auth.middleware";
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
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(AuthMiddleware)
			.exclude(
				{
					path: "/api/auth/register",
					method: RequestMethod.POST
				},
				{
					path: "/api/auth/login",
					method: RequestMethod.POST
				},
				{
					path: "/api/users",
					method: RequestMethod.GET
				}
			)
			.forRoutes({ path: "*", method: RequestMethod.ALL });
	}
}
