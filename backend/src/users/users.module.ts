import { Module } from "@nestjs/common";
import { UsersService } from "./services/users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./model/users.entity";
import UsersController from "./controllers/users-controller";
import {UsersAvatarModule} from "usersAvatar/usersAvatar.module";

@Module({
  imports: [TypeOrmModule.forFeature([User]), UsersAvatarModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {
}
