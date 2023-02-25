import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import typeOrmConfig from "database/config/typeorm.config";
import { AuthModule } from "auth/auth.module";
import { UsersModule } from "users/users.module";
import {MessagesModule} from "messages/messages.module";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync(typeOrmConfig),
        AuthModule,
        UsersModule,
        MessagesModule
    ]
})
export class AppModule {}
