import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "users/model/user.entity";
import { UserCridentialsDto } from "../model/dto/userCridentials.dto";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User) private userRepository: Repository<User>
	) {}

	async create(loginRegisterUserDto: UserCridentialsDto) {
		const user = await this.userRepository.findOneBy({
			username: loginRegisterUserDto.username
		});
		if (user) throw new ConflictException("Username duplicated");

		return this.userRepository.save(loginRegisterUserDto);
	}

	async findByUsername(username: string): Promise<User> {
		return this.userRepository.findOne({
			where: { username },
			select: ["id", "username", "password"]
		});
	}

	async findOne(id: number) {
		return this.userRepository.findOneBy({ id });
	}
}