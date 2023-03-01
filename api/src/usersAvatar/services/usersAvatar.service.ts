import {
    ForbiddenException,
    Injectable,
    InternalServerErrorException,
    NotFoundException
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityNotFoundError, Repository } from "typeorm";
import { UserAvatar } from "../model/usersAvatar.entity";
import { unlinkSync } from "fs";
import { dirname, join } from "path";
import IUploadedFile from "users/types/uploaded-file.interface";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class UsersAvatarService {
    private readonly isDevelopment: boolean;

    constructor(
        @InjectRepository(UserAvatar)
        private readonly usersAvatarRepository: Repository<UserAvatar>,
        private readonly configService: ConfigService
    ) {
        this.isDevelopment = configService.get("DEVELOPMENT") === "true";
    }

    async addUserAvatarFile(
        id: number,
        file: IUploadedFile,
        userAvatar: UserAvatar
    ) {
        const name = file.originalname;
        const extension = file.originalname.split(".").pop();
        const sourcePath = file.path;

        userAvatar && (await this.delete(userAvatar.id, userAvatar.sourcePath));
        return this.usersAvatarRepository.save({ name, sourcePath, extension });
    }

    async findOneByIdAndUserId(id: number, userId: number) {
        const avatar = await this.usersAvatarRepository
            .findOneOrFail({ where: { id }, relations: { user: true } })
            .catch(error => {
                if (error instanceof EntityNotFoundError) {
                    throw new NotFoundException();
                }
                throw error;
            });

        if (!this.isDevelopment && avatar.user.id !== userId)
            throw new ForbiddenException("You are not author of the message");

        return avatar;
    }

    async delete(id: number, sourcePath: string) {
        const appDir = dirname(require.main.filename);

        try {
            unlinkSync(join(appDir, `../${sourcePath}`));
        } catch (err) {
            throw new InternalServerErrorException(err.message);
        }

        await this.usersAvatarRepository.delete(id).catch(error => {
            throw error
        });
    }
}
