
import { Inject } from '@nestjs/common';
import { Args, Mutation, Parent, Query, Resolver, ResolveField } from '@nestjs/graphql';
import { ItemInput } from './input-items.input';
import { Post } from './post.entity';
import { User } from '../user/user.entity';

import { PostService } from './post.service';

@Resolver(of => Post)
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

    @ResolveField()
    user(@Parent() post: Post): Promise<User> {
        return this.postService.getUser(post.userId)
    }
}