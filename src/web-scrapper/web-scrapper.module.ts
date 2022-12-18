import { Module } from '@nestjs/common';
import { WebScrapperService } from './web-scrapper.service';
import { WebScrapperController } from './web-scrapper.controller';


@Module({
  controllers: [WebScrapperController],
  providers: [WebScrapperService]
})


export class WebScrapperModule {}