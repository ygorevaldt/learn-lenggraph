import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { ChatbotRequestBody } from './schemas';
import { agentGraph } from 'src/core/graphs/agent/agent.graph';
import { HumanMessage } from '@langchain/core/messages';

@Injectable()
export class ChatbotService {
  async preDepartament({
    message,
    thread_id = randomUUID(),
    context_data,
  }: ChatbotRequestBody) {
    const result = await agentGraph.invoke(
      {
        messages: [new HumanMessage(message)],
        contextData: context_data,
      },
      {
        configurable: { thread_id },
      },
    );

    return { ...result, thread_id };
  }
}
