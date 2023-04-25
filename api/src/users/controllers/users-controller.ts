import {
    Body,
    Controller,
    Delete,
    FileTypeValidator,
    Get,
    MaxFileSizeValidator,
    Param,
    ParseFilePipe,
    ParseIntPipe,
    Patch,
    UploadedFile,
    UseFilters,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import { UsersService } from "users/services/users.service";
import { JwtAuthGuard } from "auth/guards/jwt-auth.guard";
import { UpdateUserDto } from "users/model/dto/update-user.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { DeleteFileOnErrorFilter } from "exceptions/delete-file-on-error.filter";
import {
    ApiBadRequestResponse,
    ApiBearerAuth,
    ApiConflictResponse,
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

@ApiBearerAuth("defaultBearerAuth")
@ApiTags("users")
@Controller("users")
class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @ApiOkResponse()
    @ApiUnauthorizedResponse({ description: "Invalid JWT token" })
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        return this.usersService.findAll();
    }

    @ApiOkResponse()
    @ApiUnauthorizedResponse({ description: "Invalid JWT token" })
    @ApiNotFoundResponse()
    @UseGuards(JwtAuthGuard)
    @Get(":id")
    async findOne(@Param("id", ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }

    @ApiOkResponse()
    @ApiUnauthorizedResponse({ description: "Invalid JWT token" })
    @ApiForbiddenResponse({ description: "You aren't the owner of an account" })
    @ApiInternalServerErrorResponse({
        description: "Something goes wrong with deleting file on server"
    })
    @ApiNotFoundResponse()
    @UseGuards(JwtAuthGuard)
    @Delete(":id")
    async delete(
        @Param("id", ParseIntPipe) id: number,
        @UserReq("id") userId: number
    ) {
        await this.usersService.delete(id, userId);
    }

    @ApiOkResponse({ description: "Return JWT token" })
    @ApiUnauthorizedResponse({ description: "Invalid JWT token" })
    @ApiForbiddenResponse({ description: "You aren't the owner of account" })
    @ApiConflictResponse({ description: "Duplicated username" })
    @ApiBadRequestResponse({
        description: "Message depend on validation error"
    })
    @ApiInternalServerErrorResponse({
        description: "Something gone wrong with orm"
    })
    @ApiNotFoundResponse()
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
        @Param("id", ParseIntPipe) id: number,
        @UserReq("id") userId: number,
        @Body() updateUserDto: UpdateUserDto,
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new MaxFileSizeValidator({ maxSize: 5000000 }),
                    new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/ })
                ],
                fileIsRequired: false
            })
        )
        file: IUploadedFile
    ) {
        return this.usersService.update(id, userId, updateUserDto, file);
    }
}

export default UsersController;
