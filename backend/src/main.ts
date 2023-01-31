import { NestFactory } from "@nestjs/core";
import { AppModule } from "app.module";
import { ConfigService } from "@nestjs/config";
import { Logger } from "@nestjs/common";
import * as dotenv from "dotenv";
import * as dotenvExpand from "dotenv-expand";
import { GlobalValidatePipe } from "./pipes/GlobalValidate.pipe";

(async () => {
  const logger = new Logger("Main");
  dotenvExpand.expand(dotenv.config({ path: "./.env" }));
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const PORT = +configService.get("SERVER_PORT");

  app.setGlobalPrefix("api");
  app.useGlobalPipes(new GlobalValidatePipe());


  await app.listen(PORT);
  logger.log(`Server running on PORT ${PORT}`);
})();
