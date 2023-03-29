import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "auth/auth.module";
import { UsersModule } from "users/users.module";
import { MessagesModule } from "messages/messages.module";
import { configuration } from "../config/configuration";
import typeOrmConfig from "database/config/typeorm.config";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `${process.cwd()}/config/env/${
                process.env.NODE_ENV
            }.env`,
            load: [configuration]
        }),
        TypeOrmModule.forRootAsync(typeOrmConfig),
        AuthModule,
        UsersModule,
        MessagesModule
    ]
})
export class AppModule {}
