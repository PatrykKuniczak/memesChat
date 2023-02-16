import {
	Controller,
	Delete,
	ForbiddenException,
	Param,
	ParseIntPipe,
	UseGuards
} from "@nestjs/common";
import { UsersAvatarService } from "../services/usersAvatar.service";
import { JwtAuthGuard } from "auth/guards/jwt-auth.guard";
import { UserReq } from "users/decorators/user.decorator";
import { UsersService } from "users/services/users.service";
import {
	ApiBearerAuth,
	ApiForbiddenResponse,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiTags,
	ApiUnauthorizedResponse
} from "@nestjs/swagger";

@ApiBearerAuth()
@ApiTags("users-avatar")
@Controller("users-avatar")
class UsersAvatarController {
	constructor(
		private readonly usersAvatarService: UsersAvatarService,
		private readonly userService: UsersService
	) {}

	@ApiForbiddenResponse()
	@ApiUnauthorizedResponse()
	@ApiOkResponse()
	@ApiNotFoundResponse()
	@UseGuards(JwtAuthGuard)
	@Delete(":id")
	async delete(
		@Param("id", ParseIntPipe) id: number,
		@UserReq("id") userId: number
	) {
		const user = await this.userService.findOneByAvatarId(id);
		if (user.id !== userId) throw new ForbiddenException();

		await this.usersAvatarService.remove(
			user.userAvatar.id,
			user.userAvatar.sourcePath
		);
	}
}

export default UsersAvatarController;
