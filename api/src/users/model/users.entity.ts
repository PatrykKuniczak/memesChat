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
    password: string;

    @OneToOne(() => UserAvatar, userAvatar => userAvatar.user, {
        onDelete: "SET NULL",
        eager: true
    })
    @JoinColumn()
    userAvatar: UserAvatar | null;

    @OneToMany(() => Message, message => message.author)
    messages: Message[];
}
