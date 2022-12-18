import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectEntityManager } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";
import { User } from "./entities/user.entity";
import { WebSocketServer } from "@nestjs/websockets";
import { Namespace } from "socket.io";


@Injectable()
export class UserService {
  @WebSocketServer()
  server: Namespace;

  constructor(@InjectEntityManager() private entityManager: EntityManager) {
  }

  create(createUserDto: CreateUserDto) {
    return this.entityManager.save(this.entityManager.create(User, createUserDto));
  }

  async remove(id: string) {
    return this.entityManager.delete(User, { clientId: id });
  }

  async findAll() {
    return new Array(...await this.server.sockets.keys());
  }

  identify(id: number) {
    return this.entityManager.findOne(User, { where: { id } });
  }

  findByName(id: number) {
    return this.entityManager.findOne(User, { where: { id }, select: { name: true } });
  }
}