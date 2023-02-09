import {ConflictException, ForbiddenException, Injectable, NotFoundException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "users/model/users.entity";
import {UserCredentialsDto} from "../model/dto/userCredentials.dto";
import {UpdateUserDto} from "../model/dto/updateUser.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {
    }

    async create(userCredentialsDto: UserCredentialsDto) {
        const user = await this.userRepository.findOneBy({
            username: userCredentialsDto.username
        });

        if (user) throw new ConflictException("Duplicated username");

        return this.userRepository.save(userCredentialsDto);
    }

    async update(id: number, userId: number, updateUserDto: UpdateUserDto) {
        updateUserDto.username = updateUserDto.username
            .replace(/\s/g, "").toLowerCase();

        if (userId !== id) throw new ForbiddenException();

        const {username} = await this.findOneById(id, userId);

        if (username !== updateUserDto.username) {
            await this.userRepository.update(id, updateUserDto).catch(() => {
                throw new ConflictException("Duplicated username");
            });
        }
    }

    async delete(userId: number, id: number) {
        if (userId !== id) throw new ForbiddenException();

        const result = (await this.userRepository.delete(id)).affected;

        if (!result) throw new NotFoundException();
    }

    async findAll() {
        return this.userRepository.find();
    }

    async findOneByUsername(username: string) {
        return this.userRepository.findOneByOrFail({username}).catch(() => {
            throw new NotFoundException();
        });
    }

    async findOneById(id: number, userId: number) {
        if (id !== userId) throw new ForbiddenException();

        return this.userRepository
            .createQueryBuilder("user")
            .leftJoinAndSelect("user.userAvatar", "userAvatar")
            .where({id})
            .getOne()
            .catch(() => {
                throw new NotFoundException();
            });
    }

    async passwordSelect(username: string) {
        return this.userRepository.findOneOrFail({
            where: {username},
            select: ["password"]
        }).catch(() => {
            throw new NotFoundException();
        });
    }
}
