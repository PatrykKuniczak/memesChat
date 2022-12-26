import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import typeOrmConfig from "./database/config/typeorm.config";
import { ConfigModule } from "@nestjs/config";
import { WebScrapperModule } from "./web-scrapper/web-scrapper.module";
import { MessageModule } from "./message/message.module";
import { UserModule } from "./user/user.module";


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TypeOrmModule.forRootAsync(typeOrmConfig),
    WebScrapperModule, MessageModule, UserModule],
  exports: [TypeOrmModule]
})


export class AppModule {
}