import {
    Controller,
    Delete,
    Get,
    Header,
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
    @Header("Content-Type", "image/jpeg")
    @UseGuards(JwtAuthGuard)
    @Get(":id")
    async getFile(
        @Param("id", ParseIntPipe) id: number,
        @UserReq("id") userId: number
    ) {
        const avatar = await this.usersAvatarService.findOneByIdAndUserId(
            id,
            userId
        );

        return this.usersAvatarService.getFile(avatar);
    }

    @ApiOkResponse()
    @ApiUnauthorizedResponse({ description: "Invalid JWT token" })
    @ApiForbiddenResponse({ description: "You are not author of the avatar" })
    @ApiNotFoundResponse()
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
