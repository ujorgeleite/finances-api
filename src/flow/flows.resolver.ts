import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetFlowArgs } from './dto/args/get-flow-args';
import { GetFlowsArgs } from './dto/args/get-flows-args';
import { CreateFlowInput } from './dto/input/create-flow.input';
import { DeleteFlowInput } from './dto/input/delete-flow.input';
import { UpdateFlowInput } from './dto/input/update-flow.input';

import { FlowsService } from './flows.service';
import { Flow } from './models/flow';

@Resolver(() => Flow)
export class FlowsResolver {
  constructor(private readonly flowService: FlowsService) {}

  @Query(() => Flow, { name: 'flow', nullable: true })
  getFlow(@Args() getFlowArgs: GetFlowArgs): Flow {
    return this.flowService.getFlow(getFlowArgs);
  }

  @Query(() => [Flow], { name: 'flows', nullable: 'items' })
  getFlows(@Args() getFlowsArgs: GetFlowsArgs): Flow[] {
    return this.flowService.getFlows(getFlowsArgs);
  }

  @Mutation(() => Flow)
  createFlow(@Args('createFlowData') createFlowData: CreateFlowInput): Flow {
    return this.flowService.createFlow(createFlowData);
  }

  @Mutation(() => Flow)
  updateFlow(@Args('updateFlowData') updateFlowData: UpdateFlowInput): Flow {
    return this.flowService.updateFlow(updateFlowData);
  }

  @Mutation(() => Flow)
  deleteFlow(@Args('deleteFlowData') deleteFlowData: DeleteFlowInput): Flow {
    return this.flowService.deleteFlow(deleteFlowData);
  }
}
