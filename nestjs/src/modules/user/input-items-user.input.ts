import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ItemInputUser {
  @Field(type => String, {nullable: true})
  fullname: string;

  @Field(type => String)
  email: string;

  @Field(type => String)
  password: string;
}