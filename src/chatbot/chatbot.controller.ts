import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from 'src/pipes';
import { ChatbotRequestBody, chatbotRequestBodySchema } from './schemas';
import { ChatbotService } from './chatbot.service';

@Controller('/chatbot')
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(chatbotRequestBodySchema))
  async agent(@Body() body: ChatbotRequestBody) {
    return await this.chatbotService.preDepartament(body);
  }
}
