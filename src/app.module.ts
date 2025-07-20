import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatbotModule } from './chatbot/chatbot.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ChatbotModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
