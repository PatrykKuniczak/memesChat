import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Delete,
    UseGuards,
    Param,
    ForbiddenException,
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
    @ApiCreatedResponse()
    @ApiUnauthorizedResponse({ description: "Invalid JWT token" })
    @ApiBadRequestResponse({
        description: "Message depend on validation error"
    })
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(
        @Body() createMessageDto: CreateMessageDto,
        @UserReq("id") userId: number
    ) {
        createMessageDto.authorId = userId;
        return this.messagesService.create(createMessageDto);
    }

    constructor(private readonly messagesService: MessagesService) {}

    @ApiOkResponse()
    @ApiUnauthorizedResponse({ description: "Invalid JWT token" })
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        return this.messagesService.findAll();
    }

    @ApiOkResponse()
    @ApiUnauthorizedResponse({ description: "Invalid JWT token" })
    @ApiForbiddenResponse({
        description:
            "'You can't manipulate message with no author' or 'You are not author of the message'"
    })
    @ApiNotFoundResponse()
    @UseGuards(JwtAuthGuard)
    @Delete(":id")
    async delete(
        @Param("id", ParseIntPipe) id: number,
        @UserReq("id") userId: number
    ) {
        await this.messagesService.findOneByIdAndAuthorId(id, userId);
        await this.messagesService.delete(id);
    }

    @ApiOkResponse()
    @ApiUnauthorizedResponse({ description: "Invalid JWT token" })
    @ApiForbiddenResponse({
        description:
            "'You can't update image' or 'You can't manipulate message with no author' or 'You are not author of the message'"
    })
    @ApiNotFoundResponse()
    @ApiBadRequestResponse()
    @UseGuards(JwtAuthGuard)
    @Patch(":id")
    async update(
        @Body() updateMessageDto: UpdateMessageDto,
        @Param("id", ParseIntPipe) id: number,
        @UserReq("id") userId: number
    ) {
        const currentMessage =
            await this.messagesService.findOneByIdAndAuthorId(id, userId);

        if (currentMessage.isImage)
            throw new ForbiddenException("You can't update image.");

        await this.messagesService.update(id, updateMessageDto);
    }
}
