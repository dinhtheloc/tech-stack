import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ItemInput {
  @Field()
  readonly title: string;
  @Field()
  readonly image: string;
  @Field()
  readonly body: string;
}