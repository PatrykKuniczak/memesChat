import {
	Column,
	Entity,
	OneToOne,
	PrimaryGeneratedColumn
} from "typeorm";
import { User } from "users/model/users.entity";

@Entity("UserAvatar")
export class UserAvatar {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 50, select: false })
	name: string;

	@Column({ length: 255 })
	source: string;

	@Column()
	extension: string;

	@OneToOne(() => User, user => user.userAvatar)
	user?: User;
}
