import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetFlowsArgs {
  @Field()
  userId: string;
}
