import { Module } from "@nestjs/common";
import {MessagesGateway} from "messages/messages.gateway";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [HttpModule],
    providers: [MessagesGateway]
})
export class MessagesModule {}
