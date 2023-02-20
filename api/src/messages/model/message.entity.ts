import {
    Column,
    CreateDateColumn,
    Entity, JoinColumn,
    OneToOne,
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
    isImage?: boolean;

    @CreateDateColumn()
    readonly createdAt: number;

    @OneToOne(() => User, {
        onDelete: "SET NULL"
    })
    @JoinColumn()
    author: User;
}
