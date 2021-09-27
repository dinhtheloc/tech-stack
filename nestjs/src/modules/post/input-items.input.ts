import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ItemInput {
  @Field(type => String)
  title: string;

  @Field(type => String)
  meta_title: string;

  @Field(type => String)
  summary: string;

  @Field(type => Boolean)
  published: boolean;

  @Field(type => String)
  content: string;

  @Field(type => String)
  userId: string;
}