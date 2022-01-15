import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { GetFlowArgs } from './dto/args/get-flow-args';
import { GetFlowsArgs } from './dto/args/get-flows-args';
import { CreateFlowInput } from './dto/input/create-flow.input';
import { DeleteFlowInput } from './dto/input/delete-flow.input';
import { UpdateFlowInput } from './dto/input/update-flow.input';
import { Flow } from './models/flow';

@Injectable()
export class FlowsService {
  private flows: Flow[] = [];

  public createFlow(createFlowData: CreateFlowInput): Flow {
    const flow: Flow = {
      flowId: uuidv4(),
      ...createFlowData,
    };

    this.flows.push(flow);

    return flow;
  }

  public updateFlow(updateFlowData: UpdateFlowInput): Flow {
    const flow = this.flows.find(
      (flow) => flow.flowId === updateFlowData.flowId,
    );

    Object.assign(flow, updateFlowData);

    return flow;
  }

  public getFlow(getFlowArgs: GetFlowArgs): Flow {
    return this.flows.find((flow) => flow.flowId === getFlowArgs.flowId);
  }

  public getFlows(getFlowsArgs: GetFlowsArgs): Flow[] {
    return getFlowsArgs.flowIds.map((flowId) => this.getFlow({ flowId }));
  }

  public deleteFlow(deleteFlowsArgs: DeleteFlowInput): Flow {
    const flowIndex = this.flows.findIndex(
      (flow) => flow.flowId === deleteFlowsArgs.flowId,
    );

    const flow = this.flows[flowIndex];
    this.flows.splice(flowIndex);

    return flow;
  }
}
