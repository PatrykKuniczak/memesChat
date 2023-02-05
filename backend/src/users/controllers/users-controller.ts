import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, UseGuards } from "@nestjs/common";
import { UsersService } from "users/services/users.service";
import { JwtAuthGuard } from "auth/guards/jwt-auth.guard";
import { UpdateUserDto } from "../model/dto/updateUser.dto";
import { AuthJwtPayload } from "auth/strategies/jwt.strategy";
import { UserReq } from "../user.decorator";
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
  async findOne(@UserReq() user: AuthJwtPayload, @Param("id", ParseIntPipe) id: number) {
    return this.userService.findOneById(id, user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async delete(@UserReq() user: AuthJwtPayload, @Param("id", ParseIntPipe) paramId: number) {
    return this.userService.delete(user.id, paramId);
  }

  @UseGuards(JwtAuthGuard)
  @Put(":id")
  @UseInterceptors(FileInterceptor('userAvatar'))
  async update(
      @UserReq() user: AuthJwtPayload,
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

    return this.userService.update(user.id, id, updateUserDto);
  }
}

export default UsersController;
