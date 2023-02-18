import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("UserAvatar")
export class UserAvatar {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, select: false })
    name: string;

    @Column()
    sourcePath: string;

    @ApiProperty({ description: "Must be .jpg/.jpeg/.png" })
    @Column()
    extension: string;
}
