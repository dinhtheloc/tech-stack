import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { AuthGuard } from '../guard/auth.guard';
import { UserService } from './user.service';
import { User } from './user.entity';

@Resolver('User')
export class UserResolver {
    constructor(private userService: UserService) { }

    @Query(returns => User)
    @UseGuards(new AuthGuard())
    me(@Context('user') user: User) {
        return user;
    }

    @Mutation(returns => String)
    async login(@Args('email') email: string) {
        let user = await this.userService.getUserByEmail(email);
        if (!user) {
            user = await this.userService.createUser(email);
        }
        return this.userService.createToken(user);
    }
}
