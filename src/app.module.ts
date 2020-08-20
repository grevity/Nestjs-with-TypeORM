import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { config } from "dotenv";
import { UserModule } from './user/user.module';
import { User } from './user/models/user.entity';
import { PostsModule } from './posts/posts.module';
import { Posts } from './posts/models/posts.entity';
config()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: process.env.DATABASE,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      host: process.env.DBHOST,
      type:"postgres",
      synchronize: true,
      entities:[
        User,
        Posts
      ],
    }),
    UserModule,
    PostsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
