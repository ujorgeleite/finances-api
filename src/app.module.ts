import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { FlowsModule } from './flow/flows.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    FlowsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
