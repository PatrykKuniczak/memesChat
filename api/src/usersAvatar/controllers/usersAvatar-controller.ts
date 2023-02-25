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
import {
    ApiBearerAuth,
    ApiForbiddenResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnauthorizedResponse
} from "@nestjs/swagger";
import { UserReq } from "users/decorators/user.decorator";
import { ConfigService } from "@nestjs/config";

@ApiBearerAuth("defaultBearerAuth")
@ApiTags("users-avatar")
@Controller("users-avatar")
class UsersAvatarController {
    private readonly isDevelopment: boolean;

    constructor(
        private readonly usersAvatarService: UsersAvatarService,
        private readonly configService: ConfigService
    ) {
        this.isDevelopment = configService.get("DEVELOPMENT") === "true";
    }

    @ApiUnauthorizedResponse()
    @ApiForbiddenResponse()
    @ApiOkResponse()
    @UseGuards(JwtAuthGuard)
    @Delete(":id")
    async delete(
        @Param("id", ParseIntPipe) id: number,
        @UserReq("id") userId: number
    ) {
        const avatar = await this.usersAvatarService.findOne(id).catch(() => {
            throw new ForbiddenException();
        });

        if (!this.isDevelopment && avatar.user.id != userId)
            throw new ForbiddenException();

        await this.usersAvatarService.remove(avatar.id, avatar.sourcePath);
    }
}

export default UsersAvatarController;
