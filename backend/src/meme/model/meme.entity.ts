import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";
import {SourceType} from "./meme.enums";



@Entity("Meme")
export class Meme {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column()
    sourceType: SourceType;

    @Column({ length: 255 })
    source: string;

    @Column()
    extension: string;
}
