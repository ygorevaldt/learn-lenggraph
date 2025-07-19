import { Body, Controller, Post } from '@nestjs/common';
import { exampleGraph } from './core/graphs/example/example.graph';
import { userInputGraph } from './core/graphs/user-input/user-input.graph';
import { threadId } from 'worker_threads';
import { randomUUID } from 'crypto';

@Controller()
export class AppController {
  @Post('/example')
  async example() {
    const graphResult = await exampleGraph.invoke({ foo: '' });
    return graphResult;
  }

  @Post('user-input')
  async userInput(
    @Body()
    {
      input,
      message,
      conversation_id,
    }: {
      input?: string;
      message: string;
      conversation_id: string;
    },
  ) {
    const threadId = conversation_id ?? randomUUID();
    const result = await userInputGraph.invoke(
      {
        input,
        userFeedback: message,
      },
      {
        configurable: {
          thread_id: threadId,
        },
      },
    );

    return {
      ...result,
      thread_id: threadId,
    };
  }
}
