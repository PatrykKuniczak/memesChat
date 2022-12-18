import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebScrapperService } from './web-scrapper.service';
import { CreateWebScrapperDto } from './dto/create-web-scrapper.dto';
import { UpdateWebScrapperDto } from './dto/update-web-scrapper.dto';


@Controller('web-scrapper')
export class WebScrapperController {
  constructor(private readonly webScrapperService: WebScrapperService) {}

  @Post()
  create(@Body() createWebScrapperDto: CreateWebScrapperDto) {
    return this.webScrapperService.create(createWebScrapperDto);
  }

  @Get()
  findAll() {
    return this.webScrapperService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webScrapperService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWebScrapperDto: UpdateWebScrapperDto) {
    return this.webScrapperService.update(+id, updateWebScrapperDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webScrapperService.remove(+id);
  }
}