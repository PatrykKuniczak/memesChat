import {
	Body,
	Controller,
	Get,
	HttpException,
	HttpStatus,
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

	@UseGuards(JwtAuthGuard)
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
			throw new HttpException(
				{
					status: HttpStatus.BAD_REQUEST,
					error: "No file given"
				},
				HttpStatus.BAD_REQUEST
			);
		}

		const addFilePromises = await this.memeService.addMemeByFile(file);

		try {
			const resolved = await Promise.all(addFilePromises);
			return resolved[0];
		} catch (error) {
			throw new HttpException(
				{
					status: HttpStatus.INTERNAL_SERVER_ERROR,
					error: error
				},
				HttpStatus.INTERNAL_SERVER_ERROR
			);
		}
	}

	@UseGuards(JwtAuthGuard)
	@Post("url")
	async addMemeByURL(@Body() memeDto: MemeDto) {
		if (!memeDto.name || !memeDto.extension || !memeDto.source) {
			throw new HttpException(
				{
					status: HttpStatus.BAD_REQUEST,
					error: "Missing name, extension or source"
				},
				HttpStatus.BAD_REQUEST
			);
		}

		try {
			return this.memeService.addMemeByUrl(memeDto);
		} catch (error) {
			throw new HttpException(
				{
					status: HttpStatus.INTERNAL_SERVER_ERROR,
					error: error
				},
				HttpStatus.INTERNAL_SERVER_ERROR
			);
		}
	}

	@UseGuards(JwtAuthGuard)
	@Get(":id")
	async getMemeById(@Param("id", ParseIntPipe) id: number) {
		const file = await this.memeService.findOne(id);

		if (!file) {
			throw new HttpException("Not found", HttpStatus.NOT_FOUND);
		}

		return file;
	}

	@UseGuards(JwtAuthGuard)
	@Get("local/:name")
	async getMemeByLocalName(@Param("name") name: string) {
		return this.memeService.getMemeByLocalName(name);
	}
}

export default MemeController;
