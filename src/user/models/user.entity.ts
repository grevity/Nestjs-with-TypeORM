import { Entity,PrimaryGeneratedColumn,Column, OneToMany } from "typeorm";
import { Posts } from "src/posts/models/posts.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    age: number;

    @OneToMany(type => Posts, post => post.user)
    post: Posts[]
}