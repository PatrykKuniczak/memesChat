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
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnauthorizedResponse
} from "@nestjs/swagger";

@ApiBearerAuth("defaultBearerAuth")
@ApiTags("users-avatar")
@Controller("users-avatar")
class UsersAvatarController {
    constructor(private readonly usersAvatarService: UsersAvatarService) {}

    @ApiUnauthorizedResponse()
    @ApiOkResponse()
    @ApiNotFoundResponse()
    @UseGuards(JwtAuthGuard)
    @Delete(":id")
    async delete(@Param("id", ParseIntPipe) id: number) {
        const avatar = await this.usersAvatarService.findOne(id);

        await this.usersAvatarService.remove(avatar.id, avatar.sourcePath);
    }
}

export default UsersAvatarController;
