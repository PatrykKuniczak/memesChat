import { NestFactory } from "@nestjs/core";
import { AppModule } from "app.module";
import { ConfigService } from "@nestjs/config";
import { Logger, ValidationPipe } from "@nestjs/common";
import { SwaggerModule } from "@nestjs/swagger";
import swaggerConfig, { swaggerOptions } from "swagger/swagger.config";
import { JwtToken } from "swagger/jwt-token.property.dto";
import { User } from "users/model/users.entity";
import { Message } from "messages/model/message.entity";

const IS_DEVELOPMENT_ENABLED = process.env.NODE_ENV === "dev";
const IS_VALIDATION_OFF_ENABLED =
    process.env.IS_VALIDATION_OFF_ENABLED === "true";
const IS_EACH_CORS_ENABLED = process.env.IS_EACH_CORS_ENABLED === "true";

(async () => {
    const logger = new Logger("Main");

    const app = await NestFactory.create(AppModule, {
        cors: {
            origin: IS_EACH_CORS_ENABLED ? "*" : process.env.CLIENT_URL
        }
    });

    const configService = app.get(ConfigService);
    const PORT = +configService.get("port");

    app.setGlobalPrefix("api");

    if (!IS_VALIDATION_OFF_ENABLED)
        app.useGlobalPipes(
            new ValidationPipe({
                transform: true,
                whitelist: true,
                forbidNonWhitelisted: true
            })
        );

    const document =
        IS_DEVELOPMENT_ENABLED &&
        SwaggerModule.createDocument(app, swaggerConfig, {
            extraModels: [JwtToken, User, Message]
        });

    const defaultJwtToken =
        IS_DEVELOPMENT_ENABLED &&
        configService.get("devOptions.defaultJwtToken");

    IS_DEVELOPMENT_ENABLED &&
        SwaggerModule.setup(
            "docs",
            app,
            document,
            swaggerOptions(defaultJwtToken)
        );

    await app.listen(PORT);
    logger.log(`Server running on PORT ${PORT}`);
})();
