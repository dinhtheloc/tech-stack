import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';
import { UserModule } from '../user/user.module';


@Module({
  imports: [UserModule, TypeOrmModule.forFeature([Post])],
  exports: [PostService],
  providers: [PostResolver, PostService],

})
export class PostModule { }