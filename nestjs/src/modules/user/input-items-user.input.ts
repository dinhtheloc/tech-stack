import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ItemInputUser {
  @Field(type => String)
  fullname: string;

  @Field(type => String)
  email: string;

  @Field(type => String)
  passwordHash: string;
}