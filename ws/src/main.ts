import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const logger = new Logger("Main");

  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const PORT = +configService.get("WS_SERVER_PORT");

  app.enableCors();
  await app.listen(PORT);
  logger.log(`Server running on PORT ${PORT}`);
}

bootstrap();
