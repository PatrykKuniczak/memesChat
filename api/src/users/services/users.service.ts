import {
    Injectable,
    ConflictException,
    NotFoundException,
    ForbiddenException
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityNotFoundError, QueryFailedError, Repository } from "typeorm";
import { User } from "users/model/users.entity";
import { UpdateUserDto } from "users/model/dto/update-user.dto";
import { UserCredentialsDto } from "auth/model/dto/user-credentials.dto";
import { ConfigService } from "@nestjs/config";
import { UsersAvatarService } from "usersAvatar/services/usersAvatar.service";
import IUploadedFile from "users/types/uploaded-file.interface";

@Injectable()
export class UsersService {
    private readonly isDevelopment: boolean;

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly configService: ConfigService,
        private readonly usersAvatarService: UsersAvatarService
    ) {
        this.isDevelopment =
            configService.get("DEVELOPMENT") === "true" || false;
    }

    async create(userCredentialsDto: UserCredentialsDto) {
        const user = await this.userRepository
            .findOneBy({
                username: userCredentialsDto.username
            })
            .catch(error => {
                throw error;
            });

        if (user) throw new ConflictException("Duplicated username");

        return this.userRepository.save(userCredentialsDto);
    }

    async findAll() {
        return this.userRepository.find();
    }

    async findOne(id: number) {
        return this.userRepository.findOneByOrFail({ id }).catch(error => {
            if (error instanceof EntityNotFoundError)
                throw new NotFoundException();

            throw error;
        });
    }

    async findOneByIdAndUserJwtId(id: number, userId: number) {
        const user = await this.userRepository
            .findOneByOrFail({ id })
            .catch(error => {
                if (error instanceof EntityNotFoundError)
                    throw new NotFoundException();

                throw error;
            });

        if (!this.isDevelopment && user.id !== userId)
            throw new ForbiddenException("You are not the owner of account");

        return user;
    }

    async findOneByUsername(username: string) {
        return this.userRepository
            .findOneByOrFail({ username })
            .catch(error => {
                if (error instanceof EntityNotFoundError)
                    throw new NotFoundException();

                throw error;
            });
    }

    async selectPassword(username: string) {
        return this.userRepository
            .findOneOrFail({
                where: { username },
                select: ["id", "password"]
            })
            .catch(error => {
                if (error instanceof EntityNotFoundError)
                    throw new NotFoundException("Username don't exist");

                throw error;
            });
    }

    async delete(id: number) {
        return this.userRepository.delete(id);
    }

    async update(
        id: number,
        userId: number,
        updateUserDto: UpdateUserDto,
        file: IUploadedFile
    ) {
        const user = await this.findOneByIdAndUserJwtId(id, userId);

        updateUserDto.username = updateUserDto.username
            .replace(/\s/g, "")
            .toLowerCase();

        const avatar = user.userAvatar;

        if (file)
            updateUserDto.userAvatar =
                await this.usersAvatarService.addUserAvatarFile(
                    id,
                    file,
                    avatar
                );
        else {
            updateUserDto.userAvatar = null;

            if (avatar)
                await this.usersAvatarService.delete(
                    avatar.id,
                    avatar.sourcePath
                );
        }

        await this.userRepository.update(id, updateUserDto).catch(error => {
            if (error instanceof QueryFailedError)
                throw new ConflictException("Duplicated username");

            throw error;
        });
    }
}
