import {
    ForbiddenException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
    StreamableFile
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityNotFoundError, Repository } from "typeorm";
import { UserAvatar } from "../model/usersAvatar.entity";
import { createReadStream, unlinkSync } from "fs";
import { join } from "path";
import IUploadedFile from "users/types/uploaded-file.interface";

@Injectable()
export class UsersAvatarService {
    constructor(
        @InjectRepository(UserAvatar)
        private readonly usersAvatarRepository: Repository<UserAvatar>
    ) {}

    async getFile(id: number) {
        const avatar = await this.findOne(id);

        const file = createReadStream(process.cwd() + "\\" + avatar.sourcePath);

        return new StreamableFile(file);
    }

    async addUserAvatarFile(id: number, file: IUploadedFile) {
        const name = file.originalname;
        const extension = file.originalname.split(".").pop();
        const sourcePath = file.path;

        return this.usersAvatarRepository.save({ name, sourcePath, extension });
    }

    async findOne(id: number) {
        return this.usersAvatarRepository
            .findOneOrFail({ where: { id }, relations: { user: true } })
            .catch(error => {
                if (error instanceof EntityNotFoundError) {
                    throw new NotFoundException();
                }
                throw error;
            });
    }

    async delete(id: number, userId: number) {
        const avatar = await this.findOne(id);

        if (avatar.user.id !== userId)
            throw new ForbiddenException("You aren't author of the avatar");

        const appDir = process.cwd();

        try {
            unlinkSync(join(appDir, avatar.sourcePath));
        } catch (err) {
            throw new InternalServerErrorException(err.message);
        }

        await this.usersAvatarRepository.delete(avatar.id).catch(error => {
            throw error;
        });
    }
}
