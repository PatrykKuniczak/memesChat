import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import typeOrmConfig from "database/config/typeorm.config";
import { AuthModule } from "auth/auth.module";
import { UsersModule } from "users/users.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import {MessagesModule} from "messages/messages.module";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync(typeOrmConfig),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, "../avatars"),
            serveRoot: `/avatars`,
            exclude: ["/api*"]
        }),
        AuthModule,
        UsersModule,
        MessagesModule
    ]
})
export class AppModule {}
