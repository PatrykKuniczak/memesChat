import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import typeOrmConfig from "database/config/typeorm.config";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./users/user.module";
import {MemeModule} from "./meme/meme.module";

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		TypeOrmModule.forRootAsync(typeOrmConfig),
		AuthModule,
		UserModule,
		MemeModule
	],
	exports: [TypeOrmModule]
})
export class AppModule {}
