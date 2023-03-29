import { ConfigModule, ConfigService } from "@nestjs/config";
import { UserAvatar } from "usersAvatar/model/usersAvatar.entity";
import { User } from "users/model/users.entity";
import { Message } from "messages/model/message.entity";

const typeOrmConfig = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
        type: configService.get("database.type"),
        host: configService.get("database.host"),
        port: configService.get("database.port"),
        username: configService.get("database.username"),
        password: configService.get("database.password"),
        database: configService.get("database.database"),
        extra: { charset: "utf8mb4_unicode_ci" },
        entities: [User, UserAvatar, Message],
        synchronize: true
    })
};

export default typeOrmConfig;
