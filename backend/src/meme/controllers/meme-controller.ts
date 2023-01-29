import {
	BadRequestException,
	Body,
	Controller,
	Get,
	HttpException,
	HttpStatus,
	InternalServerErrorException,
	Param,
	ParseIntPipe,
	Post,
	UploadedFile,
	UseGuards,
	UseInterceptors
} from "@nestjs/common";
import { JwtAuthGuard } from "../../auth/guards/jwt-auth.guard";
import { MemeService } from "../services/meme.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { MemeDto } from "../model/dto/meme.dto";
@Controller("meme")
class MemeController {
	constructor(private memeService: MemeService) {}

	@Get("random")
	async getRandomMeme() {
		const file = await this.memeService.findRandom();

		if (!file) {
			throw new HttpException("Not found", HttpStatus.NOT_FOUND);
		}

		return file;
	}

	@UseGuards(JwtAuthGuard)
	@Post("file")
	@UseInterceptors(FileInterceptor("file"))
	async addMemeByFile(@UploadedFile() file) {
		if (!file) {
			throw new BadRequestException("No file given");
		}

		const addFilePromises = await this.memeService.addMemeByFile(file);

		try {
			const resolved = await Promise.all(addFilePromises);
			return resolved[0];
		} catch (error) {
			throw new InternalServerErrorException(error);
		}
	}

	@UseGuards(JwtAuthGuard)
	@Post("url")
	async addMemeByURL(@Body() memeDto: MemeDto) {
		if (!memeDto.name || !memeDto.extension || !memeDto.source) {
			throw new BadRequestException("Missing name, extension or source");
		}

		try {
			return this.memeService.addMemeByUrl(memeDto);
		} catch (error) {
			throw new InternalServerErrorException(error);
		}
	}
}

export default MemeController;
