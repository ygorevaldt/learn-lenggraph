import { StateAnnotation } from './state-annotation';

export const endNode = (_state: typeof StateAnnotation.State) => {
  console.log('---endNode---');
  return {};
};
