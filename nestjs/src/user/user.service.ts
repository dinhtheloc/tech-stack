import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';

import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  createToken({ id, email }: User) {
    return jwt.sign({ id, email }, 'secret');
  }

  createUser(email: string) {
    return this.userRepo.save({ email });
  }

  getUserByEmail(email: string) {
    return this.userRepo.findOne({ email });
  }
}
