import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { User } from '../user/user.entity';
import {UserService} from '../user/user.service';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private readonly PostRepository: Repository<Post>,
        private userService: UserService,
    ) { }

    create(createPostDto: CreatePostDto): Promise<Post> {
        const post = new Post();
        post.title = createPostDto.title;
        post.meta_title = createPostDto.meta_title;
        post.summary = createPostDto.summary;
        post.published = createPostDto.published;
        post.content = createPostDto.content;
        post.userId = createPostDto.userId;
        
        return this.PostRepository.save(post);
    }

    findAll(): Promise<Post[]> {
        return this.PostRepository.find();
    }

    findByUserId(user): Promise<Post[]> {
        return this.PostRepository.find({ where: user });
    }

    findOne(id: string): Promise<Post> {
        return this.PostRepository.findOne(id);
    }

    getUser(userId: string): Promise<User> {
        return this.userService.findOne(userId);
    }
}