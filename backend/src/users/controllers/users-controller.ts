import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    UseGuards,
    InternalServerErrorException,
    UploadedFile,
    UseInterceptors,
    FileTypeValidator,
    ParseFilePipe
} from "@nestjs/common";
import {UsersService} from "users/services/users.service";
import {JwtAuthGuard} from "auth/guards/jwt-auth.guard";
import {UpdateUserDto} from "../model/dto/updateUser.dto";
import {UserReq} from "../user.decorator";
import {UsersAvatarService} from "../../usersAvatar/services/usersAvatar.service";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller("users")
class UsersController {
    constructor(
        private readonly userService: UsersService,
        private readonly usersAvatarService: UsersAvatarService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        return this.userService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id")
    async findOne(@UserReq("id") userId: number, @Param("id", ParseIntPipe) id: number) {
        return this.userService.findOneById(id, userId);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(":id")
    async delete(@UserReq("id") userId: number, @Param("id", ParseIntPipe) paramId: number) {
        return this.userService.delete(userId, paramId);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(":id")
    @UseInterceptors(FileInterceptor('userAvatar'))
    async update(
        @Param("id", ParseIntPipe) id: number,
        @UserReq("id") userId: number,
        @Body() updateUserDto: UpdateUserDto,
        @UploadedFile(new ParseFilePipe({
                validators: [new FileTypeValidator({fileType: /(jpg|jpeg|png)$/})]
            })
        ) file,
    ) {
        if (file) {
            const addFilePromises = await this.usersAvatarService.addUserAvatarFile(file);

		try {
			const result = await Promise.all(addFilePromises);
			const userAvatar = result[0];

			if (userAvatar) {
				updateUserDto.userAvatar = userAvatar;
			}
		} catch (error) {
			throw new InternalServerErrorException(error);
		}

        return this.userService.update(id, userId, updateUserDto);
    }
}

export default UsersController;
