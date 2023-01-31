import {
	Body,
	Controller,
	Delete,
	Get, InternalServerErrorException,
	Param,
	ParseIntPipe,
	Put,
	UploadedFile,
	UseGuards,
	UseInterceptors
} from "@nestjs/common";
import { UsersService } from "users/services/users.service";
import { JwtAuthGuard } from "auth/guards/jwt-auth.guard";
import { UpdateUserDto } from "../model/dto/updateUser.dto";
import { UsersAvatarService } from "../../usersAvatar/services/usersAvatar.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("users")
class UsersController {
	constructor(
		private userService: UsersService,
		private usersAvatarService: UsersAvatarService
	) {}

	@UseGuards(JwtAuthGuard)
	@Get()
	async findAll() {
		return this.userService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(":id")
	async findOne(@Param("id", ParseIntPipe) id: number) {
		return this.userService.findOneBy({ id });
	}

	@UseGuards(JwtAuthGuard)
	@Delete(":id")
	async delete(@Param("id", ParseIntPipe) id: number) {
		return this.userService.delete(id);
	}

	@UseGuards(JwtAuthGuard)
	@Put(":id")
	@UseInterceptors(FileInterceptor('userAvatar'))
	async update(
		@Param("id", ParseIntPipe) id: number,
		@Body() user: UpdateUserDto,
		@UploadedFile() file,
	) {
		if (file) {
			const addFilePromises = await this.usersAvatarService.addUserAvatarFile(file);

			try {
				const result = await Promise.all(addFilePromises);
				const userAvatar = result[0];
				if(userAvatar){
					user.userAvatar = userAvatar;
				}
			} catch (error) {
				throw new InternalServerErrorException(error);
			}
		}

		return this.userService.update(id, user);
	}
}

export default UsersController;
