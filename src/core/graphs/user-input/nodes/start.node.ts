import { StateAnnotation } from './state-annotation';

export const startNode = (_state: typeof StateAnnotation.State) => {
  console.log('---startNode---');
  return {};
};
