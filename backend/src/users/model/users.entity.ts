import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import { UserAvatar } from "usersAvatar/model/usersAvatar.entity";

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

    // @OneToMany(() => MessageEntity, message => message.user, {nullable: true})
    // messages: Message[];
}
