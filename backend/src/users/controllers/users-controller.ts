import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, UseGuards} from "@nestjs/common";
import {UsersService} from "users/services/users.service";
import {JwtAuthGuard} from "auth/guards/jwt-auth.guard";
import {UpdateUserDto} from "../model/dto/updateUser.dto";
import {UserReq} from "../user.decorator";

@Controller("users")
class UsersController {
    constructor(private readonly userService: UsersService) {
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
    async update(
        @Param("id", ParseIntPipe) id: number,
        @UserReq("id") userId: number,
        @Body() updateUserDto: UpdateUserDto
    ) {
        return this.userService.update(id, userId, updateUserDto);
    }
}

export default UsersController;
