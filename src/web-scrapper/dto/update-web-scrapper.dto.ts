import { PartialType } from '@nestjs/mapped-types';
import { CreateWebScrapperDto } from './create-web-scrapper.dto';


export class UpdateWebScrapperDto extends PartialType(CreateWebScrapperDto) {}