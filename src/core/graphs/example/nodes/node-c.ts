import { ExampleStateAnnotation } from './example-state-notation';

export const nodeC = async (state: typeof ExampleStateAnnotation.State) => {
  return {
    foo: state.foo + ', C',
  };
};
