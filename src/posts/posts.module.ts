import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './models/posts.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Posts]),
    ],
})
export class PostsModule {
}
