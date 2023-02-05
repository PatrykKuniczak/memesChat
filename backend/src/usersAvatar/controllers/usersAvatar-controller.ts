import {
	Controller,
	Delete,
	ForbiddenException,
	Get,
	InternalServerErrorException,
	Param,
	ParseIntPipe,
	UseGuards
} from "@nestjs/common";
import { UsersAvatarService } from "../services/usersAvatar.service";
import { UserReq } from "users/user.decorator";
import { AuthJwtPayload } from "auth/strategies/jwt.strategy";
import { JwtAuthGuard } from "auth/guards/jwt-auth.guard";
@Controller("usersAvatar")
class UsersAvatarController {
	constructor(private usersAvatarService: UsersAvatarService) {}

	@UseGuards(JwtAuthGuard)
	@Delete(":id")
	async removeUserAvatarById(
		@UserReq() jwtUser: AuthJwtPayload,
		@Param("id", ParseIntPipe) id: number
	) {
		const userAvatar = await this.usersAvatarService.getUserAvatarByIdAndUserId(
			jwtUser.id,
			id
		);

		if (!userAvatar) {
			throw new ForbiddenException("You have no access for this userAvatar");
		}

		try {
			await this.usersAvatarService.removeUserAvatarFileBySource(userAvatar.source);
		} catch (error){
			throw new InternalServerErrorException(error);
		}

		return Boolean(this.usersAvatarService.removeUserAvatarById(userAvatar.id));
	}

	@Get(":source")
	getUserAvatarBySource(@Param("source") source: string) {
		return this.usersAvatarService.getUserAvatarFileBySource(source);
	}
}

export default UsersAvatarController;
