import { Entity,PrimaryGeneratedColumn,Column,ManyToOne } from "typeorm";
import { User } from "src/user/models/user.entity";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'text'})
    title: string;

    @Column({type:'text'})
    descriptions: number;

    @ManyToOne(type => User, user => user.post)
    user: User;
}