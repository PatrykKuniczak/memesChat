import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("UserAvatar")
export class UserAvatar {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, select: false })
    name: string;

    @Column()
    sourcePath: string;

    @Column()
    extension: string;
}
