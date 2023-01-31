import { Controller, Get, Param } from "@nestjs/common";
import { UsersAvatarService } from "../services/usersAvatar.service";
@Controller("usersAvatar")
class UsersAvatarController {
	constructor(private memeService: UsersAvatarService) {}

	@Get("local/:name")
	async getMemeByLocalName(@Param("source") source: string) {
		return this.memeService.getUserAvatarBySource(source);
	}
}

export default UsersAvatarController;
