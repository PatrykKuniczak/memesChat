import { forwardRef, Module } from "@nestjs/common";
import { UsersAvatarService } from "./services/usersAvatar.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserAvatar } from "./model/usersAvatar.entity";
import UsersAvatarController from "./controllers/usersAvatar-controller";
import { UsersModule } from "users/users.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserAvatar]),
        forwardRef(() => UsersModule)
    ],
    controllers: [UsersAvatarController],
    providers: [UsersAvatarService],
    exports: [UsersAvatarService]
})
export class UsersAvatarModule {}
