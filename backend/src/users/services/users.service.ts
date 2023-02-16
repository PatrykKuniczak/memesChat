import {
    ConflictException,
    Injectable,
    NotFoundException
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "users/model/users.entity";
import { UserCredentialsDto } from "auth/model/dto/user-credentials.dto";
import { UpdateUserDto } from "users/model/dto/update-user.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async create(userCredentialsDto: UserCredentialsDto) {
        const user = await this.userRepository.findOneBy({
            username: userCredentialsDto.username
        });

        if (user) throw new ConflictException("Duplicated username");

        return this.userRepository.save(userCredentialsDto);
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        updateUserDto.username = updateUserDto.username
            .replace(/\s/g, "")
            .toLowerCase();

        const user = await this.userRepository.findOneBy({
            username: updateUserDto.username
        });

        if (user) throw new ConflictException("Duplicated username");

        await this.userRepository.save({ id, ...updateUserDto });
    }

    async delete(id: number) {
        const result = (await this.userRepository.delete(id)).affected;

        if (!result) throw new NotFoundException();
    }

    async findAll() {
        return this.userRepository.find();
    }

    async findOneByUsername(username: string) {
        return this.userRepository.findOneByOrFail({ username }).catch(() => {
            throw new NotFoundException();
        });
    }

    async findOneById(id: number) {
        return this.userRepository.findOne({
            where: { id },
            relations: { userAvatar: true }
        });
    }

    async findOneByAvatarId(id: number) {
        return this.userRepository
            .findOneOrFail({
                where: { userAvatar: { id } },
                relations: { userAvatar: true }
            })
            .catch(() => {
                throw new NotFoundException();
            });
    }

    async passwordSelect(username: string) {
        return this.userRepository
            .findOneOrFail({
                where: { username },
                select: ["password"]
            })
            .catch(() => {
                throw new NotFoundException();
            });
    }
}
