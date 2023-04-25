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
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly configService: ConfigService,
        private readonly usersAvatarService: UsersAvatarService,
        private readonly jwtService: JwtService
    ) {}

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

    async delete(id: number, userId: number) {
        if (id !== userId)
            throw new ForbiddenException("You aren't the owner of account");

        const user = await this.findOne(id);

        if (user.userAvatar)
            await this.deleteAvatar(user.userAvatar.id, userId);

        return this.userRepository.delete(id);
    }

    async update(
        id: number,
        userId: number,
        updateUserDto: UpdateUserDto,
        file: IUploadedFile
    ) {
        if (id !== userId)
            throw new ForbiddenException("You aren't the owner of account");

        const { userAvatar } = await this.findOne(id);

        if (userAvatar) await this.deleteAvatar(userAvatar.id, userId);

        if (file) {
            updateUserDto.userAvatar =
                await this.usersAvatarService.addUserAvatarFile(id, file);
        } else {
            updateUserDto.userAvatar = null;
        }

        await this.userRepository.update(id, updateUserDto).catch(error => {
            if (error instanceof QueryFailedError)
                throw new ConflictException("Duplicated username");

            throw error;
        });

        return this.generateJwt({ id, username: updateUserDto.username });
    }

    private async deleteAvatar(avatarId: number, userId: number) {
        await this.usersAvatarService.delete(avatarId, userId);
    }

    private generateJwt(payload: { id: number; username: string }) {
        const jwtToken = this.jwtService.sign(payload);

        return { accessToken: jwtToken };
    }
}
