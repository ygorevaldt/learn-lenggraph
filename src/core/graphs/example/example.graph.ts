import { StateGraph } from '@langchain/langgraph';
import { ExampleStateAnnotation, nodeA, nodeB, nodeC } from './nodes';

export const exampleGraph = new StateGraph(ExampleStateAnnotation)
  .addNode('nodeA', nodeA, {
    ends: ['nodeB', 'nodeC'],
  })
  .addNode('nodeB', nodeB)
  .addNode('nodeC', nodeC)
  .addEdge('__start__', 'nodeA')
  .compile();
