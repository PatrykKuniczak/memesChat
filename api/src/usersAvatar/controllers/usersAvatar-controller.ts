import {
    Controller,
    Delete,
    Get,
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

    @ApiOkResponse()
    @ApiUnauthorizedResponse({ description: "Invalid JWT token" })
    @ApiNotFoundResponse()
    @UseGuards(JwtAuthGuard)
    @Get(":id")
    async getFile(@Param("id", ParseIntPipe) id: number) {
        return this.usersAvatarService.getFile(id);
    }

    @ApiOkResponse()
    @ApiUnauthorizedResponse({ description: "Invalid JWT token" })
    @ApiForbiddenResponse({ description: "You aren't owner of the avatar" })
    @ApiNotFoundResponse()
    @UseGuards(JwtAuthGuard)
    @Delete(":id")
    async delete(
        @Param("id", ParseIntPipe) id: number,
        @UserReq("id") userId: number
    ) {
        await this.usersAvatarService.delete(id, userId);
    }
}

export default UsersAvatarController;
