import { NodeInterrupt } from '@langchain/langgraph';
import { StateAnnotation } from './state-annotation';
import { geminiAgent } from 'src/core/llm/gemini-agent';
import {
  generateDinamicQuestion,
  cleanAiResponse,
} from 'src/core/common/utils';

export const askFullNameNode = async (state: typeof StateAnnotation.State) => {
  console.log('--askFullNameNode--');

  const lastMessage = state.messages[state.messages.length - 1];

  const prompt = `
    Você é um assistente inteligente. Analise a mensagem a baixo
    Mensagem: "${lastMessage.content}"

    Você deve extrair um nome completo do texto da mensagem, se conseguir, retorne APENAS o nome completo que você conseguiu extrair, nada mais que isso.

    Se a mensagem não contêm nenhum nome completo, retorne APENAS "não" e nada mais que isso
  `;
  const result = await geminiAgent.invoke(prompt);
  const aiResponse = cleanAiResponse(result);

  if (aiResponse == 'não') {
    const dinamicQuestion = await generateDinamicQuestion({
      goal: 'Comprimentar o cliente cordialmente e obter seu nome completo informando que precisa disso para melhor atende-lo',
      llm: geminiAgent,
      messages: state.messages,
    });
    throw new NodeInterrupt(dinamicQuestion);
  }

  state.fullName = aiResponse;
  return state;
};
