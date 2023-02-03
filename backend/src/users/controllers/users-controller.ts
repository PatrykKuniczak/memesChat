import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, UseGuards } from "@nestjs/common";
import { UsersService } from "users/services/users.service";
import { JwtAuthGuard } from "auth/guards/jwt-auth.guard";
import { UpdateUserDto } from "../model/dto/updateUser.dto";
import { AuthJwtPayload } from "auth/strategies/jwt.strategy";
import { UserReq } from "../user.decorator";

@Controller("users")
class UsersController {
  constructor(private userService: UsersService) {
  }

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
  @Patch(":id")
  async update(
    @UserReq() user: AuthJwtPayload,
    @Param("id", ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.userService.update(user.id, id, updateUserDto);
  }
}

export default UsersController;
