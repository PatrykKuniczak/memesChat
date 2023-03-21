import { Module } from "@nestjs/common";
import { MessagesService } from "messages/services/messages.service";
import { MessagesController } from "messages/controllers/messages.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Message } from "messages/model/message.entity";
import { ValidationErrorFilter } from "exceptions/validation-error.filter";
import { APP_FILTER } from "@nestjs/core";

@Module({
    imports: [TypeOrmModule.forFeature([Message])],
    controllers: [MessagesController],
    providers: [
        MessagesService,
        { provide: APP_FILTER, useClass: ValidationErrorFilter }
    ]
})
export class MessagesModule {}
