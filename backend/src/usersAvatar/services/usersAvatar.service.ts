import { Injectable, StreamableFile } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { UsersAvatarDto } from "../model/dto/usersAvatar.dto";
import { ConfigService } from "@nestjs/config";
import { createReadStream } from "fs";
import { join } from "path";
import { writeFile } from 'fs';
import {UserAvatar} from "../model/usersAvatar.entity";

@Injectable()
export class UsersAvatarService {
	constructor(
		@InjectRepository(UserAvatar) private usersAvatarRepository: Repository<UserAvatar>,
		private configService: ConfigService
	) {}
	async addUserAvatarFile(file): Promise<[Promise<any>, Promise<any>]> {
		const fileName = file.originalname;
		const fileExtension = file.originalname.split(".").pop();
		const fileSource = uuidv4() + "." + fileExtension;

		const fileWritePromise = new Promise((resolve, reject) => {
			writeFile(
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

		const memeDto = new UsersAvatarDto(
			fileName,
			fileSource,
			fileExtension
		);

		const addToDbPromise = this.usersAvatarRepository.save(memeDto);

		return [addToDbPromise, fileWritePromise];
	}

	async getUserAvatarBySource(source: string): Promise<StreamableFile> {
		const file = createReadStream(join(process.cwd() + "/local/files", source));

		return new StreamableFile(file); // TODO: Handle error
	}
}
