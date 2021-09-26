import { Injectable } from '@nestjs/common';
import { Post } from './posts.entity';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private readonly PostRepository: Repository<Post>,
    ) { }

    create(createPostDto: CreatePostDto): Promise<Post> {
        const post = new Post();
        post.title = createPostDto.title;
        post.image = createPostDto.image;
        post.body = createPostDto.body;

        return this.PostRepository.save(post);
    }

    findAll(): Promise<Post[]> {
        return this.PostRepository.find();
    }

    findOne(id: string): Promise<Post> {
        return this.PostRepository.findOne(id);
    }
}