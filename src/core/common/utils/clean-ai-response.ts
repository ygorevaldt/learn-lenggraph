import { AIMessageChunk } from '@langchain/core/messages';

export function cleanAiResponse(aiResponse: AIMessageChunk) {
  return aiResponse.content
    .toString()
    .replace(/```json/, '')
    .replace(/```/, '')
    .trim();
}
