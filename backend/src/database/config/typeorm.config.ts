import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";

const typeOrmConfig: TypeOrmModuleAsyncOptions = {
	imports: [ConfigModule],
	inject: [ConfigService],
	useFactory: async (configService: ConfigService) => ({
    type: configService.get("DB_TYPE"),
    url: configService.get("DB_URL"),
    extra: { charset: "utf8mb4_unicode_ci" },
    autoLoadEntities: true,
    synchronize: true
  })
};

export default typeOrmConfig;
