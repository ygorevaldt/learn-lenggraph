import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { Message } from '../types/node';
import { HumanMessage } from '@langchain/core/messages';
import { cleanAiResponse } from './clean-ai-response';
import { generateConversationHistory } from './generate-conversation-history';

export type GenerateAiResponseParams = {
  llm: ChatGoogleGenerativeAI;
  messages: Message[];
  goal: string;
};

export async function generateDinamicQuestion({
  llm,
  messages,
  goal,
}: GenerateAiResponseParams) {
  const prompt = `
    Abaixo está uma conversa entre um usuário e um assistente.

    Conversa:
    ${generateConversationHistory(messages)}

    Considerando o historico da conversa até este ponto, retorne apenas uma pergunta com este objetivo:
    ${goal}
  `;

  const result = await llm.invoke(prompt);
  return cleanAiResponse(result);
}
