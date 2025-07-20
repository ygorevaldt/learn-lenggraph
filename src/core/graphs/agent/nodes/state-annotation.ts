import { Annotation } from '@langchain/langgraph';
import { Message } from 'src/core/common/types/node';
import { ContextData, Customer } from '../types';

export const StateAnnotation = Annotation.Root({
  messages: Annotation<Message[]>,
  contextData: Annotation<ContextData>,
  fullName: Annotation<string>,
  customerData: Annotation<Customer>,
});
