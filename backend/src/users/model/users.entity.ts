import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import { UserAvatar } from "usersAvatar/model/usersAvatar.entity";
import {ApiProperty} from "@nestjs/swagger";

@Entity("User")
export class User {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ unique: true, length: 50 })
    username: string;

    @ApiProperty()
    @Column({ select: false })
    password?: string;

    @ApiProperty()
    @OneToOne(() => UserAvatar, {
        onDelete: "SET NULL"
    })
    @JoinColumn()
    userAvatar?: UserAvatar;

    // @OneToMany(() => MessageEntity, message => message.user, {nullable: true})
    // messages: Message[];
}
