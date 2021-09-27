import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { ApolloError } from "apollo-server-express"
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

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.fullname = createUserDto.fullname;
    user.email = createUserDto.email;
    const passwordHash = await bcrypt.hash(createUserDto.password, Number(process.env.HASH_SALT));
    user.passwordHash = passwordHash;
    return this.userRepository.save(user);
  }

  async verifyUser(email: string, password: string): Promise<string> {
    const user = await this.userRepository.findOne({ where: { email: email } });
    if (user) {
      const match = await bcrypt.compare(password, user.passwordHash);
      if (match) {
        const obj = {
          id: user.id,
          email: user.email
        }
        return jwt.sign(obj, process.env.SECRET_KEY);
      } else {
        throw new ApolloError("Password is wrong.");
      }
    } else {
      throw new ApolloError("User not found.");

    }
  }

  findOne(userId: string) {
    return this.userRepository.findOne(userId);
  }
}
