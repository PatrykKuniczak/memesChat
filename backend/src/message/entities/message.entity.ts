import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";


@Entity("Message")
export class Message {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.id,
    { cascade: true, onDelete: "SET NULL" })
  user: number;
}