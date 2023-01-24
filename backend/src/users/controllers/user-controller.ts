import {
	Controller,
	Get,
	Param,
	ParseIntPipe,
	UseGuards
} from "@nestjs/common";
import { UserService } from "users/services/user.service";
import { JwtAuthGuard } from "auth/guards/jwt-auth.guard";

@Controller("user")
class UserController {
	constructor(private userService: UserService) {}

	@UseGuards(JwtAuthGuard)
	@Get(":id")
	async findOne(@Param("id", ParseIntPipe) id: number) {
		return this.userService.findOne(id);
	}
}

export default UserController;
