
import { Post } from './post.entity';
// import { IPost } from './IPost';
import { CreatePostDto } from './dto/create-post.dto';

import { ItemInput } from './input-items.input';
import { PostService } from './post.service';
import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
@Resolver()
export class PostResolver {
    constructor(
        @Inject(PostService) private postService: PostService
    ) { }
    @Query(returns => Post)
    async getPostById(@Args('id') id: string): Promise<Post> {
        return await this.postService.findOne(id);
    }

    @Mutation(returns => Post)
    async createPost(@Args('input') input: ItemInput): Promise<Post> {
        return await this.postService.create(input);
    }

    @Query(returns => [Post])
    async posts(): Promise<Post[]> {
      return await this.postService.findAll();
    }

    @Query(() => String)
    async hello() {
        return 'hello';
    }
}