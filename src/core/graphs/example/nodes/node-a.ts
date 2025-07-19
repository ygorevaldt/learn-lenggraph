import { Command } from '@langchain/langgraph';
import { ExampleStateAnnotation } from './example-state-notation';

export const nodeA = async (_state: typeof ExampleStateAnnotation.State) => {
  const goto = Math.random() > 0.5 ? 'nodeB' : 'nodeC';

  return new Command({
    update: {
      foo: 'A',
    },
    goto,
  });
};
