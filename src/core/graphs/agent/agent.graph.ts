import { END, START, StateGraph } from '@langchain/langgraph';
import {
  finishNode,
  StateAnnotation,
  askFullNameNode,
  identifiesCustomerNode,
} from './nodes';
import { memorySaver } from 'src/core/savers';
import { generateGraphImage } from 'src/core/common/utils';

export const agentGraph = new StateGraph(StateAnnotation)
  .addNode('askFullNameNode', askFullNameNode)
  .addNode('identifiesCustomerNode', identifiesCustomerNode)
  .addNode('finishNode', finishNode)
  .addEdge(START, 'askFullNameNode')
  .addEdge('askFullNameNode', 'identifiesCustomerNode')
  .addEdge('identifiesCustomerNode', 'finishNode')
  .addEdge('finishNode', END)
  .compile({
    checkpointer: memorySaver,
  });

generateGraphImage(agentGraph, 'agent-graph.png');
