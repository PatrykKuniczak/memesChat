import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import {User} from "users/model/users.entity";
import {UserAvatar} from "usersAvatar/model/usersAvatar.entity";

const typeOrmConfig: TypeOrmModuleAsyncOptions = {
	imports: [ConfigModule],
	inject: [ConfigService],
	useFactory: async (configService: ConfigService) => ({
    type: configService.get("DB_TYPE"),
    url: configService.get("DB_URL"),
    extra: { charset: "utf8mb4_unicode_ci" },
    entities: [User, UserAvatar],
    synchronize: true
  })
};

export default typeOrmConfig;
