import { Controller } from "@nestjs/common";
import { UsersAvatarService } from "../services/usersAvatar.service";

@Controller("users-avatar")
class UsersAvatarController {
    constructor(private usersAvatarService: UsersAvatarService) {}
}

export default UsersAvatarController;
