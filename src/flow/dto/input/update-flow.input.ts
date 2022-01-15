import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';


@InputType()
export class UpdateFlowInput {
  @Field()
  @IsNotEmpty()
  flowId: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  category?: string;

  @Field()
  @IsOptional()
  subCategory?: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  value?: number;

  @Field()
  date: Date;
}
