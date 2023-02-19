import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Delete,
    UseGuards, Param
} from "@nestjs/common";
import { MessagesService } from "messages/services/messages.service";
import { CreateMessageDto } from "messages/model/dto/create-message.dto";
import { UpdateMessageDto } from "messages/model/dto/update-message.dto";
import {
    ApiBadRequestResponse,
    ApiBearerAuth,
    ApiCreatedResponse, ApiForbiddenResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnauthorizedResponse
} from "@nestjs/swagger";
import { JwtAuthGuard } from "auth/guards/jwt-auth.guard";

@ApiBearerAuth('defaultBearerAuth')
@ApiTags("messages")
@Controller("messages")
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

    @ApiUnauthorizedResponse()
    @ApiCreatedResponse()
    @ApiBadRequestResponse()
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(
        @Body() createMessageDto: CreateMessageDto
    ) {
        return this.messagesService.create(createMessageDto);
    }

    @ApiUnauthorizedResponse()
    @ApiOkResponse()
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        return this.messagesService.findAll();
    }

    @ApiUnauthorizedResponse()
    @ApiOkResponse()
    @ApiNotFoundResponse()
    @UseGuards(JwtAuthGuard)
    @Get(":id")
    async findOne(@Param("id") id: number) {
        return this.messagesService.findOne(id);
    }

    @ApiUnauthorizedResponse()
    @ApiOkResponse()
    @ApiNotFoundResponse()
    @UseGuards(JwtAuthGuard)
    @Delete(":id")
    async delete(@Param("id") id: number) {
        return this.messagesService.delete(id);
    }

    @ApiUnauthorizedResponse()
    @ApiForbiddenResponse()
    @ApiOkResponse()
    @ApiNotFoundResponse()
    @ApiBadRequestResponse()
    @UseGuards(JwtAuthGuard)
    @Patch(":id")
    async update(
        @Body() updateMessageDto: UpdateMessageDto,
        @Param("id") id: number
    ) {
        return this.messagesService.update(id, updateMessageDto);
    }
}
