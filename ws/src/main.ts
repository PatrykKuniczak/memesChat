import { config } from "dotenv";

config({
    path: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`
});
import { NestFactory } from "@nestjs/core";
import { AppModule } from "app.module";
import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

const bootstrap = async () => {
    const logger = new Logger("Main");
    const isDevelopment = process.env.DEVELOPMENT === "true";
    const corsOptions = isDevelopment
        ? true
        : { origin: process.env.CLIENT_URL };

    const app = await NestFactory.create(AppModule, {
        cors: corsOptions
    });

    const configService = app.get(ConfigService);
    const PORT = +configService.get("PORT");

    await app.listen(PORT);
    logger.log(`Server running on PORT ${PORT}`);
};

bootstrap();
