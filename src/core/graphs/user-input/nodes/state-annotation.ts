import { Annotation } from '@langchain/langgraph';

export const StateAnnotation = Annotation.Root({
  input: Annotation<string>,
  userFeedback: Annotation<string>,
});
