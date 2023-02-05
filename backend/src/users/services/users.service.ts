import {
	ConflictException,
	ForbiddenException,
	Injectable,
	NotFoundException
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "users/model/users.entity";
import { UserCredentialsDto } from "../model/dto/userCredentials.dto";
import { UpdateUserDto } from "../model/dto/updateUser.dto";

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User) private userRepository: Repository<User>
	) {}

	async create(userCredentialsDto: UserCredentialsDto) {
		const user = await this.userRepository.findOneBy({
			username: userCredentialsDto.username
		});

		if (user) throw new ConflictException("Duplicated username");

		return this.userRepository.save(userCredentialsDto);
	}

	async update(userId: number, paramId: number, updateUserDto: UpdateUserDto) {
		updateUserDto.username = updateUserDto.username
			.replace(/\s/g, "")
			.toLowerCase();

		if (userId !== paramId) throw new ForbiddenException();

		const { username } = await this.findOneById(paramId, userId);

		if (username !== updateUserDto.username) {
			const { affected } = await this.userRepository
				.update(paramId, updateUserDto)
				.catch(() => {
					throw new ConflictException("Duplicated username");
				});

			return Boolean(affected);
		}
	}

	async findOneBy(valuesObj: object) {
		return this.userRepository
			.createQueryBuilder("user")
			.leftJoinAndSelect("user.userAvatar", "userAvatar")
			.where(valuesObj)
			.getOne()
			.catch(() => {
				throw new NotFoundException();
			});
	}

	async delete(userId: number, paramId: number) {
		if (userId !== paramId) throw new ForbiddenException();

		const result = Boolean(
			(await this.userRepository.delete(paramId)).affected
		);

		if (!result) throw new NotFoundException();

		return result;
	}

	async findAll() {
		return this.userRepository.find();
	}

	async findOneByUsername(username: string) {
		return this.userRepository.findOneByOrFail({ username }).catch(() => {
			throw new NotFoundException();
		});
	}

	async findOneById(paramId: number, userId: number) {
		if (paramId !== userId) throw new ForbiddenException();

		return this.userRepository
			.createQueryBuilder("user")
			.leftJoinAndSelect("user.userAvatar", "userAvatar")
			.where({ id: paramId })
			.getOne()
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
