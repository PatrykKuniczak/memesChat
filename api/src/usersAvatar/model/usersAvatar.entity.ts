import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "users/model/users.entity";

@Entity("UserAvatar")
export class UserAvatar {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column()
    sourcePath: string;

    @ApiProperty({ description: "Must be .jpg/.jpeg/.png" })
    @Column()
    extension: string;

    @OneToOne(() => User, user => user.userAvatar)
    user?: User;
}
