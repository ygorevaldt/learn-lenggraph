import { AIMessage } from '@langchain/core/messages';
import { StateAnnotation } from './state-annotation';

export const finishNode = async (state: typeof StateAnnotation.State) => {
  console.log('--finishNode--');
  return {
    messages: new AIMessage(
      'Obrigado pelas informações, vou direricionar seu atendimento para o setor responsável',
    ),
  };
};
