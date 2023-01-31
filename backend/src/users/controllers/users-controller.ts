import { Body, Controller, Delete, Get, Param, ParseIntPipe, Put, UseGuards } from "@nestjs/common";
import { UsersService } from "users/services/users.service";
import { JwtAuthGuard } from "auth/guards/jwt-auth.guard";
import { UpdateUserDto } from "../model/dto/updateUser.dto";

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
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() user: UpdateUserDto
  ) {
    return this.userService.update(id, user);
  }
}

export default UsersController;
