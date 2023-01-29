import { Module } from "@nestjs/common";
import MemeController from "./controllers/meme-controller";
import {MemeService} from "./services/meme.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Meme} from "./model/meme.entity";

@Module({
	imports: [TypeOrmModule.forFeature([Meme])],
	controllers: [MemeController],
	providers: [MemeService],
	exports: [MemeService]
})
export class MemeModule {}
