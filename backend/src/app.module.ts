import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import typeOrmConfig from "database/config/typeorm.config";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./users/user.module";

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		TypeOrmModule.forRootAsync(typeOrmConfig),
		AuthModule,
		UserModule
	],
	exports: [TypeOrmModule]
})
export class AppModule {}
