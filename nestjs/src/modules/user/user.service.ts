import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  createToken({ id, email }: User) {
    return jwt.sign({ id, email }, process.env.SECRET_KEY);
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.fullname = createUserDto.fullname;
    user.email = createUserDto.email;
    user.passwordHash = createUserDto.passwordHash;
    return this.userRepository.save(user);
  }

  findOne(userId: string) {
    return this.userRepository.findOne(userId);
  }
}
