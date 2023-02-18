import {
    Body,
    Controller,
    Delete,
    FileTypeValidator,
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
    ApiInternalServerErrorResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnauthorizedResponse
} from "@nestjs/swagger";
import IUploadedFile from "users/types/uploaded-file.interface";

@ApiBearerAuth("defaultBearerAuth")
@ApiTags("users")
@Controller("users")
class UsersController {
    constructor(
        private readonly userService: UsersService,
        private readonly usersAvatarService: UsersAvatarService
    ) {}

    @ApiUnauthorizedResponse()
    @ApiOkResponse()
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        return this.userService.findAll();
    }

    @ApiUnauthorizedResponse()
    @ApiOkResponse()
    @ApiNotFoundResponse()
    @UseGuards(JwtAuthGuard)
    @Get(":id")
    async findOne(@Param("id") id: number) {
        return this.userService.findOne(id);
    }

    @ApiUnauthorizedResponse()
    @ApiOkResponse()
    @ApiNotFoundResponse()
    @UseGuards(JwtAuthGuard)
    @Delete(":id")
    async delete(@Param("id") id: number) {
        return this.userService.delete(id);
    }

    @ApiUnauthorizedResponse()
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

        return this.userService.update(id, updateUserDto);
    }
}

export default UsersController;
