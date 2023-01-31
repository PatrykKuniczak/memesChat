import {
	Column,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn
} from "typeorm";
import { UserAvatar } from "../../usersAvatar/model/usersAvatar.entity";

@Entity("User")
export class User {
	@PrimaryGeneratedColumn()
	id?: number;

	@Column({ unique: true, length: 30 })
	username: string;

	@Column({ select: false })
	password?: string;

	@OneToOne(() => UserAvatar, userAvatar => userAvatar.user)
	@JoinColumn()
	userAvatar?: UserAvatar;
}
