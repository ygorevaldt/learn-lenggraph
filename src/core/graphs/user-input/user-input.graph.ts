import { END, START, StateGraph } from '@langchain/langgraph';
import {
  endNode,
  humanFeedbackNode,
  startNode,
  StateAnnotation,
} from './nodes';
import { memorySaver } from 'src/core/savers';

export const userInputGraph = new StateGraph(StateAnnotation)
  .addNode('startNode', startNode)
  .addNode('humanFeedbackNode', humanFeedbackNode)
  .addNode('endNode', endNode)
  .addEdge(START, 'startNode')
  .addEdge('startNode', 'humanFeedbackNode')
  .addEdge('humanFeedbackNode', 'endNode')
  .addEdge('endNode', END)
  .compile({
    checkpointer: memorySaver,
  });
