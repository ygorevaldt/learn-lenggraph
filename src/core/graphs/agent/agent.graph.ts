import { END, START, StateGraph } from '@langchain/langgraph';
import { greetingNode, finishNode, StateAnnotation } from './nodes';
import { memorySaver } from 'src/core/savers';

export const agentGraph = new StateGraph(StateAnnotation)
  .addNode('greetingNode', greetingNode)
  .addNode('finishNode', finishNode)
  .addEdge(START, 'greetingNode')
  .addEdge('greetingNode', 'finishNode')
  .addEdge('finishNode', END)
  .compile({
    checkpointer: memorySaver,
  });
