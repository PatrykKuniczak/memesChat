import { Test, TestingModule } from '@nestjs/testing';
import { WebScrapperController } from './web-scrapper.controller';
import { WebScrapperService } from './web-scrapper.service';

describe('WebScrapperController', () => {
  let controller: WebScrapperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebScrapperController],
      providers: [WebScrapperService],
    }).compile();

    controller = module.get<WebScrapperController>(WebScrapperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
