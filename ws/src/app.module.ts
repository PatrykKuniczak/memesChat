import { Module } from "@nestjs/common";
import { MessagesModule } from "messages/messages.module";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from 'users/users.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        MessagesModule,
        UsersModule
    ]
})
export class AppModule {}
