import { Args, Mutation, Resolver, ResolveField } from '@nestjs/graphql';
import { ItemInputUser } from './input-items-user.input';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver(of => User)
export class UserResolver {
    constructor(
        private readonly userService: UserService,
    ) { }

    // @Query(returns => User)
    // @UseGuards(new AuthGuard())
    // me(@Context('user') user: User) {
    //     return user;
    // }

    @Mutation(() => String)
    async login(
        @Args('email') email: string,
        @Args('password') password: string
    ) {
        return await this.userService.verifyUser(email, password);
    }


    @Mutation(returns => User)
    async createUser(@Args('input') input: ItemInputUser): Promise<User> {
        return await this.userService.createUser(input);
    }

}
