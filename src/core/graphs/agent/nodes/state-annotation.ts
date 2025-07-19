import { AIMessage, HumanMessage } from '@langchain/core/messages';
import { Annotation } from '@langchain/langgraph';

type Message = HumanMessage | AIMessage;

export const StateAnnotation = Annotation.Root({
  messages: Annotation<Message[]>,
  intent: Annotation<string>,
  customerFullName: Annotation<string>,
  email: Annotation<string>,
  cpf: Annotation<string>,
});
