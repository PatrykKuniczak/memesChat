import { Module } from "@nestjs/common";
import { UsersGateway } from "./users.gateway";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [HttpModule],
    providers: [UsersGateway]
})
export class UsersModule {}
