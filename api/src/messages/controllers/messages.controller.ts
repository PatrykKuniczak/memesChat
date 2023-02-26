import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Delete,
    UseGuards,
    Param,
    ForbiddenException
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
import { ConfigService } from "@nestjs/config";
import { UserReq } from "users/decorators/user.decorator";

@ApiBearerAuth("defaultBearerAuth")
@ApiTags("messages")
@Controller("messages")
export class MessagesController {
    private readonly isDevelopment: boolean;

    constructor(
        private readonly messagesService: MessagesService,
        private readonly configService: ConfigService
    ) {
        this.isDevelopment = configService.get("DEVELOPMENT") === "true";
    }

    @ApiUnauthorizedResponse()
    @ApiCreatedResponse()
    @ApiBadRequestResponse()
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(
        @Body() createMessageDto: CreateMessageDto,
        @UserReq("id") userId: number
    ) {
        createMessageDto.authorId = userId;
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
    @ApiForbiddenResponse()
    @ApiOkResponse()
    @ApiNotFoundResponse()
    @UseGuards(JwtAuthGuard)
    @Delete(":id")
    async delete(@Param("id") id: number, @UserReq("id") userId: number) {
        await this.messagesService.findOneByIdAndAuthorId(id, userId);
        await this.messagesService.delete(id);
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
        @Param("id") id: number,
        @UserReq("id") userId: number
    ) {
        const currentMessage = await this.messagesService.findOneByIdAndAuthorId(id, userId);

        if (currentMessage.isImage && updateMessageDto.isImage){
            throw new ForbiddenException(
                "You can't change image"
            );
        }

        if (!currentMessage.isImage && updateMessageDto.isImage){
            throw new ForbiddenException(
                "You can't change message type to image"
            );
        }

        return this.messagesService.update(id, updateMessageDto);
    }
}
