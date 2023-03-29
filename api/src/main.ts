import { NestFactory } from "@nestjs/core";
import { AppModule } from "app.module";
import { ConfigService } from "@nestjs/config";
import { Logger, ValidationPipe } from "@nestjs/common";
import { SwaggerModule } from "@nestjs/swagger";
import swaggerConfig, { swaggerOptions } from "swagger/swagger.config";
import { JwtToken } from "swagger/jwt-token.property.dto";
import { User } from "users/model/users.entity";

(async () => {
    const logger = new Logger("Main");

    const isDevelopment = process.env.DEVELOPMENT === "true";
    const corsOptions = isDevelopment
        ? true
        : { origin: process.env.CLIENT_URL };

    const app = await NestFactory.create(AppModule, {
        cors: corsOptions
    });

    const configService = app.get(ConfigService);
    const PORT = +configService.get("port");

    app.setGlobalPrefix("api");

    if (!isDevelopment)
        app.useGlobalPipes(
            new ValidationPipe({
                transform: true,
                whitelist: true,
                forbidNonWhitelisted: true
            })
        );

    const document = SwaggerModule.createDocument(app, swaggerConfig, {
        extraModels: [JwtToken, User]
    });

    const defaultJwtToken = configService.get("devOptions.defaultJwtToken");

    SwaggerModule.setup(
        "docs",
        app,
        document,
        isDevelopment && swaggerOptions(defaultJwtToken)
    );

    await app.listen(PORT);
    logger.log(`Server running on PORT ${PORT}`);
})();
