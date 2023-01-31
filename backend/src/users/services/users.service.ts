import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "users/model/users.entity";
import { UserCredentialsDto } from "../model/dto/userCredentials.dto";
import { UpdateUserDto } from "../model/dto/updateUser.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {
  }

  async create(userCredentialsDto: UserCredentialsDto) {
    const user = await this.userRepository.findOneBy({
      username: userCredentialsDto.username
    });

    if (user) throw new ConflictException("Duplicated username");

    return this.userRepository.save(userCredentialsDto);
  }

  async findOneBy(valuesObj: object) {
    return this.userRepository
        .createQueryBuilder("user")
        .leftJoinAndSelect("user.userAvatar", "userAvatar")
        .where(valuesObj)
        .getOne().catch(() => {
          throw new NotFoundException();
        });
  }

  async passwordSelect(valuesObj: object) {
    return this.userRepository.findOne({
      where: valuesObj,
      select: ["password"]
    });
  }

  async findAll() {
    return this.userRepository.find();
  }

  async delete(id: number) {
    return Boolean((await this.userRepository.delete(id)).affected);
  }

  async update(id: number, user: UpdateUserDto) {
    const { username } = await this.findOneBy({ id });

    if (username !== user.username) {
      const { affected } = await this.userRepository.update(id, user);

      return Boolean(affected);
    }
  }
}
