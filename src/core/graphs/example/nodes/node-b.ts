import { ExampleStateAnnotation } from './example-state-notation';

export const nodeB = async (state: typeof ExampleStateAnnotation.State) => {
  return {
    foo: state.foo + ', B',
  };
};
