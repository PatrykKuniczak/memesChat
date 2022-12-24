import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { Logger } from "@nestjs/common";
import { SocketIOAdapter } from "./socket-io-adapter";


async function bootstrap() {
  const logger = new Logger("Main");
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = parseInt(configService.get("SERVER_PORT"));

  app.useWebSocketAdapter(new SocketIOAdapter(app, configService));

  await app.listen(port);
  logger.log(`Server running on port ${port}`);
}

bootstrap();
