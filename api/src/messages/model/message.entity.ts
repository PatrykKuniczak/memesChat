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
    isImage?: boolean;

    @CreateDateColumn()
    readonly createdAt: number;

    @Column({ select: false, nullable: true })
    authorId?: number | null;

    @ManyToOne(() => User, user => user.messages, {
        eager: true,
        onDelete: "SET NULL"
    })
    readonly author?: User | null;
}
