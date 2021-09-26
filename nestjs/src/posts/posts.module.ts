import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './posts.entity';
import { PostResolver } from './posts.resolver';
import { PostService } from './posts.service';


@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  exports: [PostService],
  providers: [PostResolver, PostService],

})
export class PostModule {}