import { Args, Mutation, Resolver } from '@nestjs/graphql';
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

    // @Mutation(returns => String)
    // async login(@Args('email') email: string) {
    //     let user = await this.userService.getUserByEmail(email);
    //     if (!user) {
    //         user = await this.userService.createUser(email);
    //     }
    //     return this.userService.createToken(user);
    // }


    @Mutation(returns => User)
    async createUser(@Args('input') input: ItemInputUser): Promise<User> {
        return await this.userService.createUser(input);
    }

}
