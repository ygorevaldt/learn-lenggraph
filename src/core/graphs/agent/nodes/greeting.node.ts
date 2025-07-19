import { NodeInterrupt } from '@langchain/langgraph';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StateAnnotation } from './state-annotation';
import { geminiAgent } from 'src/core/llm/agent';

export const greetingNode = async (state: typeof StateAnnotation.State) => {
  console.log('--greetingNode--');

  const lastMessage = state.messages[state.messages.length - 1];

  if (!lastMessage) {
    throw new NodeInterrupt('Olá! Como posso te ajudar hoje?');
  }

  const prompt = `
    Você é um assistente de atendimento de concessionária de veículos cordial e eficiente.
    Com base na mensagem a seguir, tente entender a intenção do cliente (por exemplo: comprar carro, agendar serviço, solicitar orçamento, etc).
    Responda APENAS com a intenção identificada, sem rodeios.

    Mensagem do cliente:
    ${lastMessage.content}
  `;

  const result = await geminiAgent.invoke(prompt);
  const aiResponse = result.content.toString();

  state.intent = aiResponse;
  return state;
};
