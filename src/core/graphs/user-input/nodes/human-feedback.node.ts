import { interrupt } from '@langchain/langgraph';
import { StateAnnotation } from './state-annotation';

export const humanFeedbackNode = (state: typeof StateAnnotation.State) => {
  console.log('--- humanFeedbackNode ---');

  let feedback: string;
  if (!state.userFeedback) {
    feedback = interrupt('Please provide feedback');
  }
  return {
    userFeedback: feedback,
  };
};
