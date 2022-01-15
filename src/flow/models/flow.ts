import { Field, Int, ObjectType } from '@nestjs/graphql';



@ObjectType()
export class Flow {
  @Field()
  flowId: string;

  @Field()
  userId: string;

  @Field()
  category: string;

  @Field()
  subCategory?: string;

  @Field(() => Int)
  value: number;

  @Field()
  date: Date;
}
