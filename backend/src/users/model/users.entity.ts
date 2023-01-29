import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("User")
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true, length: 30 })
  username: string;

  @Column({ select: false })
  password?: string;
}
