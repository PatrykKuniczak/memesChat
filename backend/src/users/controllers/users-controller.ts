import {
    Body,
    Controller,
    Delete,
    FileTypeValidator,
    Get,
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
import { UserReq } from "../user.decorator";
import { UsersAvatarService } from "usersAvatar/services/usersAvatar.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { DeleteFileOnErrorFilter } from "filters/delete-file-on-error-filter";

@Controller("users")
class UsersController {
    constructor(
        private readonly userService: UsersService,
        private readonly usersAvatarService: UsersAvatarService
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        return this.userService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    async findOne(
        @Param("id", ParseIntPipe) id: number,
        @UserReq("id") userId: number
    ) {
        return this.userService.findOneById(id, userId);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(":id")
    async delete(
        @Param("id", ParseIntPipe) paramId: number,
        @UserReq("id") userId: number
    ) {
        return this.userService.delete(userId, paramId);
    }

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
                    new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/ })
                ],
                fileIsRequired: false
            })
        )
        file: Express.Multer.File
    ) {
        if (file)
            updateUserDto.userAvatar =
                await this.usersAvatarService.addUserAvatarFile(
                    id,
                    userId,
                    file
                );
        else delete updateUserDto.userAvatar;
        return this.userService.update(id, userId, updateUserDto);
    }
}

export default UsersController;
