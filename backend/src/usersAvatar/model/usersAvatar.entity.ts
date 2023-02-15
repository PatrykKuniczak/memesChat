import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {ApiProperty} from "@nestjs/swagger";

@Entity("UserAvatar")
export class UserAvatar {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ length: 50, select: false })
    name: string;

    @ApiProperty()
    @Column()
    sourcePath: string;

    @ApiProperty()
    @Column()
    extension: string;
}
