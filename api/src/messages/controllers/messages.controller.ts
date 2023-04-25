import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Delete,
    UseGuards,
    Param,
    ParseIntPipe
} from "@nestjs/common";
import { MessagesService } from "messages/services/messages.service";
import { CreateMessageDto } from "messages/model/dto/create-message.dto";
import { UpdateMessageDto } from "messages/model/dto/update-message.dto";
import {
    ApiBadRequestResponse,
    ApiBearerAuth,
    ApiCreatedResponse,
    ApiForbiddenResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnauthorizedResponse
} from "@nestjs/swagger";
import { JwtAuthGuard } from "auth/guards/jwt-auth.guard";
import { UserReq } from "users/decorators/user.decorator";

@ApiBearerAuth("defaultBearerAuth")
@ApiTags("messages")
@Controller("messages")
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

    @ApiCreatedResponse()
    @ApiUnauthorizedResponse({ description: "Invalid JWT token" })
    @ApiForbiddenResponse({
        description: "You can't create a message for other user"
    })
    @ApiBadRequestResponse({
        description: "Message depend on validation error"
    })
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(
        @Body() createMessageDto: CreateMessageDto,
        @UserReq("id") userId: number
    ) {
        return this.messagesService.create(createMessageDto, userId);
    }

    @ApiOkResponse()
    @ApiUnauthorizedResponse({ description: "Invalid JWT token" })
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        return this.messagesService.findAll();
    }

    @ApiOkResponse()
    @ApiUnauthorizedResponse({ description: "Invalid JWT token" })
    @ApiNotFoundResponse()
    @UseGuards(JwtAuthGuard)
    @Get(":id")
    async findOne(@Param("id", ParseIntPipe) id: number) {
        return this.messagesService.findOne(id);
    }

    @ApiOkResponse()
    @ApiUnauthorizedResponse({ description: "Invalid JWT token" })
    @ApiForbiddenResponse({
        description:
            "'You can't manipulate message with no author' or 'You aren't author of a message'"
    })
    @ApiNotFoundResponse()
    @UseGuards(JwtAuthGuard)
    @Delete(":id")
    async delete(
        @Param("id", ParseIntPipe) id: number,
        @UserReq("id") userId: number
    ) {
        await this.messagesService.delete(id, userId);
    }

    @ApiOkResponse()
    @ApiUnauthorizedResponse({ description: "Invalid JWT token" })
    @ApiForbiddenResponse({
        description:
            "'You can't update a message which is an image' or 'You aren't author of a message'"
    })
    @ApiBadRequestResponse({
        description: "Message depend on validation error"
    })
    @ApiNotFoundResponse()
    @UseGuards(JwtAuthGuard)
    @Patch(":id")
    async update(
        @Body() updateMessageDto: UpdateMessageDto,
        @Param("id", ParseIntPipe) id: number,
        @UserReq("id") userId: number
    ) {
        await this.messagesService.update(id, userId, updateMessageDto);
    }
}
