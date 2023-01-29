import { Injectable, StreamableFile } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Meme } from "../model/meme.entity";
import { v4 as uuidv4 } from "uuid";
import { MemeDto } from "../model/dto/meme.dto";
import { SourceType } from "../model/meme.enums";
import { ConfigService } from "@nestjs/config";
import { createReadStream } from "fs";
import { join } from "path";
const fs = require("fs");
@Injectable()
export class MemeService {
	constructor(
		@InjectRepository(Meme) private memeRepository: Repository<Meme>,
		private configService: ConfigService
	) {}
	async addMemeByFile(file): Promise<[Promise<any>, Promise<any>]> {
		const fileName = file.originalname;
		const fileExtension = file.originalname.split(".").pop();
		const fileSource = uuidv4() + "." + fileExtension;

		const fileWritePromise = new Promise((resolve, reject) => {
			fs.writeFile(
				`${this.configService.get("FILES_DIRECTORY")}${fileSource}`,
				file.buffer,
				function (error) {
					if (error) {
						reject(error);
					}
					resolve(true);
				}
			);
		});

		const memeDto = new MemeDto(
			fileName,
			SourceType.LOCAL_FILE,
			fileSource,
			fileExtension
		);

		const addToDbPromise = new Promise(async (resolve, reject) => {
			try {
				const file = await this.memeRepository.save(memeDto);
				resolve(file);
			} catch (error) {
				reject(error);
			}
		});

		return [addToDbPromise, fileWritePromise];
	}

	async addMemeByUrl(memeDto: MemeDto) {
		memeDto.sourceType = SourceType.URL;

		return this.memeRepository.save(memeDto);
	}

	async getMemeByLocalName(name: string): Promise<StreamableFile> {
		const file = createReadStream(join(process.cwd() + "/local/files", name));

		return new StreamableFile(file); // TODO: Handle error
	}

	async findOne(id: number) {
		return this.memeRepository.findOneBy({ id });
	}

	async findRandom() {
		return this.memeRepository
			.createQueryBuilder("meme")
			.orderBy("random()")
			.limit(1)
			.getOne();
	}
}
