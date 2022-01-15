import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class DeleteFlowInput {
  @Field()
  @IsNotEmpty()
  flowId: string;
}
