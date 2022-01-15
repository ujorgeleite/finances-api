import { Module } from '@nestjs/common';
import { FlowsResolver } from './flows.resolver';
import { FlowsService } from './flows.service';

@Module({
  providers: [FlowsResolver, FlowsService],
})
export class FlowsModule {}
