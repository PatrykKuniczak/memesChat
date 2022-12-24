import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Message } from "../../message/entities/message.entity";


@Entity("User")
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 20 })
  clientId: string;

  @Column({ length: 60, unique: true, default: null })
  name?: string;

  @OneToMany(() => Message,
    (message) => message.id, { nullable: true })
  message: Message[];
}