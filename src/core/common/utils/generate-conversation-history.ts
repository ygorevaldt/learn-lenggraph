import { HumanMessage } from '@langchain/core/messages';
import { Message } from '../types/node';

export function generateConversationHistory(messages: Message[]) {
  const raw = messages
    .map((msg) => {
      const role = msg instanceof HumanMessage ? 'Usuário' : 'Assistente';
      return `${role}: ${msg.content}`;
    })
    .join('\n');

  return raw;
}
