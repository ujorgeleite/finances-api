import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';




@InputType()
export class CreateFlowInput {
  @Field()
  @IsNotEmpty()
  userId: string;

  @Field()
  @IsNotEmpty()
  category: string;

  @Field({nullable: true})
  @IsOptional()
  subCategory?: string;

  @Field()
  @IsNotEmpty()
  value: number;

  @Field()
  @IsNotEmpty()
  date: Date;
}
