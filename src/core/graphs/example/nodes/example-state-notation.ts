import { Annotation } from '@langchain/langgraph';

export const ExampleStateAnnotation = Annotation.Root({
  foo: Annotation<string>,
});
