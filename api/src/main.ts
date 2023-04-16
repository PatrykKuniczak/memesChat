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

    const IS_DEVELOPMENT = process.env.NODE_ENV === "dev";
    const VALIDATION_OFF = process.env.VALIDATION_OFF === "true";
    const ENABLE_ALL_CORS = process.env.ENABLE_ALL_CORS === "true";

    const app = await NestFactory.create(AppModule, {
        cors: {
            origin: ENABLE_ALL_CORS ? "*" : process.env.CLIENT_URL
        }
    });

    const configService = app.get(ConfigService);
    const PORT = +configService.get("port");

    app.setGlobalPrefix("api");

    if (!VALIDATION_OFF)
        app.useGlobalPipes(
            new ValidationPipe({
                transform: true,
                whitelist: true,
                forbidNonWhitelisted: true
            })
        );

    const document =
        IS_DEVELOPMENT &&
        SwaggerModule.createDocument(app, swaggerConfig, {
            extraModels: [JwtToken, User]
        });

    const defaultJwtToken =
        IS_DEVELOPMENT && configService.get("devOptions.defaultJwtToken");

    IS_DEVELOPMENT &&
        SwaggerModule.setup(
            "docs",
            app,
            document,
            VALIDATION_OFF && swaggerOptions(defaultJwtToken)
        );

    await app.listen(PORT);
    logger.log(`Server running on PORT ${PORT}`);
})();
