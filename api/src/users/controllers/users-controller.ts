import {
    Body,
    Controller,
    Delete,
    FileTypeValidator,
    ForbiddenException,
    Get,
    Param,
    ParseFilePipe,
    Patch,
    UploadedFile,
    UseFilters,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import { UsersService } from "users/services/users.service";
import { JwtAuthGuard } from "auth/guards/jwt-auth.guard";
import { UpdateUserDto } from "users/model/dto/update-user.dto";
import { UsersAvatarService } from "usersAvatar/services/usersAvatar.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { DeleteFileOnErrorFilter } from "filters/delete-file-on-error-filter";
import {
    ApiBadRequestResponse,
    ApiBearerAuth,
    ApiConsumes,
    ApiForbiddenResponse,
    ApiInternalServerErrorResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnauthorizedResponse
} from "@nestjs/swagger";
import IUploadedFile from "users/types/uploaded-file.interface";
import { UserReq } from "users/decorators/user.decorator";
import { ConfigService } from "@nestjs/config";

@ApiBearerAuth("defaultBearerAuth")
@ApiTags("users")
@Controller("users")
class UsersController {
    private readonly isDevelopment: boolean;

    constructor(
        private readonly userService: UsersService,
        private readonly usersAvatarService: UsersAvatarService,
        private readonly configService: ConfigService
    ) {
        this.isDevelopment = configService.get("DEVELOPMENT") === "true";
    }

    @ApiUnauthorizedResponse()
    @ApiOkResponse()
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        return this.userService.findAll();
    }

    @ApiUnauthorizedResponse()
    @ApiForbiddenResponse()
    @ApiOkResponse()
    @ApiNotFoundResponse()
    @UseGuards(JwtAuthGuard)
    @Get(":id")
    async findOne(@Param("id") id: number, @UserReq("id") userId: number) {
        if (!this.isDevelopment && id !== userId)
            throw new ForbiddenException();

        return this.userService.findOne(id);
    }

    @ApiUnauthorizedResponse()
    @ApiForbiddenResponse()
    @ApiOkResponse()
    @ApiNotFoundResponse()
    @UseGuards(JwtAuthGuard)
    @Delete(":id")
    async delete(@Param("id") id: number, @UserReq("id") userId: number) {
        if (!this.isDevelopment && id !== userId)
            throw new ForbiddenException();

        await this.userService.delete(id);
    }

    @ApiUnauthorizedResponse()
    @ApiForbiddenResponse()
    @ApiOkResponse()
    @ApiNotFoundResponse()
    @ApiBadRequestResponse()
    @ApiInternalServerErrorResponse()
    @ApiConsumes("multipart/form-data")
    @UseGuards(JwtAuthGuard)
    @Patch(":id")
    @UseFilters(new DeleteFileOnErrorFilter())
    @UseInterceptors(
        FileInterceptor("userAvatar", {
            storage: diskStorage({
                destination: "./avatars"
            })
        })
    )
    async update(
        @Param("id") id: number,
        @UserReq("id") userId: number,
        @Body() updateUserDto: UpdateUserDto,
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/ })
                ],
                fileIsRequired: false
            })
        )
        file: IUploadedFile
    ) {
        if (!this.isDevelopment && id !== userId)
            throw new ForbiddenException();

        if (file)
            updateUserDto.userAvatar =
                await this.usersAvatarService.addUserAvatarFile(id, file);
        else {
            updateUserDto.userAvatar = null;
            const { userAvatar } = await this.userService.findOne(id);

            if (userAvatar)
                await this.usersAvatarService.remove(
                    userAvatar.id,
                    userAvatar.sourcePath
                );
        }

        await this.userService.update(id, updateUserDto);
    }
}

export default UsersController;
