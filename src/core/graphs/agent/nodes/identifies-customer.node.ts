import { NodeInterrupt } from '@langchain/langgraph';
import { StateAnnotation } from './state-annotation';
import { geminiAgent } from 'src/core/llm/gemini-agent';
import { randomUUID } from 'node:crypto';
import { cleanAiResponse } from 'src/core/common/utils/clean-ai-response';

export const identifiesCustomerNode = async (
  state: typeof StateAnnotation.State,
) => {
  console.log('--identifiesCustomerNode--');

  const lastMessage = state.messages[state.messages.length - 1];

  const prompt = `
    Você é um assistente inteligente. Você recebeu este nome completo
    Nome completo: "${lastMessage.content}"

    Agora, você deve selecionar um cliente da lista abaixo com base no nome completo que recebeu

    Lista de clientes:
    ${JSON.stringify(state.contextData.customers)}

    Se você não conseguir fazer o vinculo entre o nome completo que recebeu com um objeto de cliente da lista de clientes, ou a lista estiver vazia, apenas retorne "cliente não identificado"

    Se conseguir, retorne o objeto do cliente selecionado no formato json.
    Se conseguir identificar o cliente, retorne APENAS o objeto JSON puro, nunca use sintaxe de markdown.

  `;
  const result = await geminiAgent.invoke(prompt);
  const aiResponse = cleanAiResponse(result);

  if (aiResponse.toLocaleLowerCase() === 'cliente não identificado') {
    return state;
  }

  state.customerData = JSON.parse(aiResponse);
  return state;
};
