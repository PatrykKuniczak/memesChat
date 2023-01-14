import { Module } from "@nestjs/common";
import { MessageService } from "./message.service";
import { MessageGateway } from "./message.gateway";
import { UserService } from "../user/user.service";


@Module({
  providers: [MessageGateway, MessageService, UserService]
})


export class MessageModule {
}