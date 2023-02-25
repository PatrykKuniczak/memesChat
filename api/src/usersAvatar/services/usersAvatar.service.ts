import {
    Injectable,
    InternalServerErrorException,
    NotFoundException
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserAvatar } from "../model/usersAvatar.entity";
import { UsersService } from "users/services/users.service";
import { unlinkSync } from "fs";
import { dirname, join } from "path";
import IUploadedFile from "users/types/uploaded-file.interface";

@Injectable()
export class UsersAvatarService {
    constructor(
        @InjectRepository(UserAvatar)
        private readonly usersAvatarRepository: Repository<UserAvatar>,
        private readonly usersService: UsersService
    ) {}

    async addUserAvatarFile(id: number, file: IUploadedFile) {
        const name = file.originalname;
        const extension = file.originalname.split(".").pop();
        const sourcePath = file.path;

        const { userAvatar } = await this.usersService.findOne(id);

        userAvatar && (await this.remove(userAvatar.id, userAvatar.sourcePath));
        return this.usersAvatarRepository.save({ name, sourcePath, extension });
    }

    async findOne(id: number) {
        return this.usersAvatarRepository
            .findOneOrFail({ where: { id }, relations: { user: true } })
            .catch(() => {
                throw new NotFoundException();
            });
    }

    async remove(id: number, sourcePath: string) {
        const appDir = dirname(require.main.filename);

        try {
            unlinkSync(join(appDir, `../${sourcePath}`));
        } catch (err) {
            throw new InternalServerErrorException(err.message);
        }

        await this.usersAvatarRepository.delete(id).catch(err => {
            throw new InternalServerErrorException(err);
        });
    }
}
