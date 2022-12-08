import { Injectable } from '@nestjs/common';
import { CreateWebScrapperDto } from './dto/create-web-scrapper.dto';
import { UpdateWebScrapperDto } from './dto/update-web-scrapper.dto';

@Injectable()
export class WebScrapperService {
  create(createWebScrapperDto: CreateWebScrapperDto) {
    return 'This action adds a new webScrapper';
  }

  findAll() {
    return `This action returns all webScrapper`;
  }

  findOne(id: number) {
    return `This action returns a #${id} webScrapper`;
  }

  update(id: number, updateWebScrapperDto: UpdateWebScrapperDto) {
    return `This action updates a #${id} webScrapper`;
  }

  remove(id: number) {
    return `This action removes a #${id} webScrapper`;
  }
}
