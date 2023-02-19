import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UserAvatar } from "usersAvatar/model/usersAvatar.entity";
import { User } from "users/model/users.entity";
import { Message } from "messages/model/message.entity";

const typeOrmConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
        type: configService.get("DB_TYPE"),
        url: configService.get("DB_URL"),
        extra: { charset: "utf8mb4_unicode_ci" },
        entities: [User, UserAvatar, Message],
        synchronize: true
    })
};

export default typeOrmConfig;
