import {
	BeforeInsert,
	BeforeUpdate,
	Column,
	Entity,
	PrimaryGeneratedColumn
} from "typeorm";

@Entity("User")
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true, length: 50 })
	username: string;

	@Column({ select: false })
	password?: string;

	// FOR NEXT FEATURE
	// @Column()
	// avatar: string

	// @OneToMany(() => MessageEntity, message => message.user, {nullable: true})
	// messages: Message[];

	@BeforeInsert()
	@BeforeUpdate()
	usernameToLowerCase?() {
		this.username = this.username.toLowerCase();
	}
}
