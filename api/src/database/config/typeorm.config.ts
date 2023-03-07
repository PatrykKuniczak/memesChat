import { ConfigModule, ConfigService } from "@nestjs/config";
import { UserAvatar } from "usersAvatar/model/usersAvatar.entity";
import { User } from "users/model/users.entity";
import { Message } from "messages/model/message.entity";

const typeOrmConfig = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
        type: configService.get("DB_TYPE"),
        host: configService.get("POSTGRES_HOST"),
        port: configService.get("POSTGRES_PORT"),
        username: configService.get("POSTGRES_USER"),
        password: configService.get("POSTGRES_PASSWORD"),
        database: configService.get("POSTGRES_DB"),
        extra: { charset: "utf8mb4_unicode_ci" },
        entities: [User, UserAvatar, Message],
        synchronize: true
    })
};

export default typeOrmConfig;
