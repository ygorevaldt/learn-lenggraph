import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import 'dotenv/config';

export const geminiAgent = new ChatGoogleGenerativeAI({
  model: 'gemini-2.0-flash',
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
  temperature: 0,
});
