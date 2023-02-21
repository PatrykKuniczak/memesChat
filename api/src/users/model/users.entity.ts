import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import { UserAvatar } from "usersAvatar/model/usersAvatar.entity";
import { Message } from "messages/model/message.entity";

@Entity("User")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 50 })
    username: string;

    @Column({ select: false })
    password?: string;

    @OneToOne(() => UserAvatar, {
        onDelete: "SET NULL"
    })
    @JoinColumn()
    userAvatar?: UserAvatar;

    @OneToMany(() => Message, message => message.author)
    messages?: Message[];
}