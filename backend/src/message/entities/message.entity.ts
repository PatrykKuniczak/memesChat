import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Message")
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;
}