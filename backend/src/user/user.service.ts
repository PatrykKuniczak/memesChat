import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectEntityManager } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";
import { User } from "./entities/user.entity";
import { WebSocketServer } from "@nestjs/websockets";
import { Namespace } from "socket.io";
import { UpdateUserDto } from "./dto/update-user.dto";


@Injectable()
export class UserService {
  @WebSocketServer()
  server: Namespace;

  constructor(@InjectEntityManager() private entityManager: EntityManager) {
  }

  async create(createUserDto: CreateUserDto) {
    return await this.entityManager.save(this.entityManager.create(User, createUserDto));
  }

  async edit({ clientId, name }: UpdateUserDto) {
    return await this.entityManager.update(User, { clientId }, { name });
  }

  async remove(clientId: string) {
    return await this.entityManager.delete(User, { clientId });
  }

  async findAll() {
    return await this.entityManager.find(User);
  }

  async findById(clientId: string) {
    return await this.entityManager.findOneBy(User, { clientId });
  }
}
