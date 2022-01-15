import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetFlowArgs {
  @Field()
  @IsNotEmpty()
  flowId: string;
}
