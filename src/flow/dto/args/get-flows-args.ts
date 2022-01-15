import { ArgsType, Field } from '@nestjs/graphql';
import { IsArray } from 'class-validator';

@ArgsType()
export class GetFlowsArgs {
  @Field(() => [String])
  @IsArray()
  flowIds: string[];
}
