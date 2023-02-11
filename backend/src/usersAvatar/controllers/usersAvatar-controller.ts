import { Controller } from "@nestjs/common";
import { UsersAvatarService } from "../services/usersAvatar.service";

@Controller("users-avatar")
class UsersAvatarController {
    constructor(private readonly usersAvatarService: UsersAvatarService) {}
}

export default UsersAvatarController;
