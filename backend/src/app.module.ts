import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebScrapperModule } from './web-scrapper/web-scrapper.module';
import { LiveChatModule } from './live-chat/live-chat.module';

@Module({
  imports: [WebScrapperModule, LiveChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
