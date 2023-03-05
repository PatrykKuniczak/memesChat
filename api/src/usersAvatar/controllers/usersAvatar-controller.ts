import {
    Controller,
    Delete,
    Param,
    ParseIntPipe,
    UseGuards
} from "@nestjs/common";
import { UsersAvatarService } from "../services/usersAvatar.service";
import { JwtAuthGuard } from "auth/guards/jwt-auth.guard";
import {
    ApiBearerAuth,
    ApiForbiddenResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnauthorizedResponse
} from "@nestjs/swagger";
import { UserReq } from "users/decorators/user.decorator";

@ApiBearerAuth("defaultBearerAuth")
@ApiTags("users-avatar")
@Controller("users-avatar")
class UsersAvatarController {
    constructor(private readonly usersAvatarService: UsersAvatarService) {}

    @ApiUnauthorizedResponse()
    @ApiForbiddenResponse()
    @ApiNotFoundResponse()
    @ApiOkResponse()
    @UseGuards(JwtAuthGuard)
    @Delete(":id")
    async delete(
        @Param("id", ParseIntPipe) id: number,
        @UserReq("id") userId: number
    ) {
        const avatar = await this.usersAvatarService.findOneByIdAndUserId(
            id,
            userId
        );

        await this.usersAvatarService.delete(avatar);
    }
}

export default UsersAvatarController;
