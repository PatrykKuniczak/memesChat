import {
	TypeOrmModuleAsyncOptions,
	TypeOrmModuleOptions
} from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";

const typeOrmConfig: TypeOrmModuleAsyncOptions = {
	imports: [ConfigModule],
	inject: [ConfigService],
	useFactory: async (
		configService: ConfigService
	): Promise<TypeOrmModuleOptions> => ({
		type: configService.get("DB_TYPE"),
		url: configService.get("DB_URL"),
		entities: ["dist/**/*.entity.js"],
		extra: {
			charset: "utf8mb4_unicode_ci"
		},
		synchronize: true
	})
};

export default typeOrmConfig;
