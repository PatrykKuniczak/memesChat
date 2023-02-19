import { Module } from "@nestjs/common";
import { MessagesService } from "messages/services/messages.service";
import { MessagesController } from "messages/controllers/messages.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Message } from "messages/model/message.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Message])],
    controllers: [MessagesController],
    providers: [MessagesService]
})
export class MessagesModule {}
