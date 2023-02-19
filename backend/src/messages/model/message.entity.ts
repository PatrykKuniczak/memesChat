import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import { User } from "users/model/users.entity";

@Entity("Message")
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    content: string;

    @Column({ default: false })
    isImage: boolean;

    @CreateDateColumn()
    createdAt: number;

    @ManyToOne(() => User, user => user.messages, {
        onDelete: "SET NULL"
    })
    author: User;
}
