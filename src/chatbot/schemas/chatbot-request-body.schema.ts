import { z } from 'zod';
import { contextDataSchema } from './base-types.schema';
import { ContextData } from 'src/core/graphs/agent/types';

export const chatbotRequestBodySchema = z
  .object({
    message: z.string().min(1).describe('Message sended from user'),
    thread_id: z
      .string()
      .min(1)
      .describe('Unique id from conversation')
      .optional(),
    context_data: contextDataSchema,
  })
  .strict();

export type ChatbotRequestBody = {
  message: string;
  thread_id?: string;
  context_data: ContextData;
};
