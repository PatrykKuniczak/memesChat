import { NestFactory } from "@nestjs/core";
import { AppModule } from "app.module";
import { ConfigService } from "@nestjs/config";
import { Logger, ValidationPipe } from "@nestjs/common";
import * as dotenv from "dotenv";
import * as dotenvExpand from "dotenv-expand";
import { SwaggerModule } from "@nestjs/swagger";
import swaggerConfig, { swaggerOptions } from "swagger/swagger.config";
import { JwtToken } from "swagger/jwt-token.property.dto";
import { User } from "users/model/users.entity";

(async () => {
    const logger = new Logger("Main");
    dotenvExpand.expand(dotenv.config({ path: ".env" }));

    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    const PORT = +configService.get("SERVER_PORT");

    app.enableCors();
    app.setGlobalPrefix("api");
    const isDevelopment = configService.get("DEVELOPMENT") === "true";

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

    const defaultJwtToken = configService.get("DEFAULT_JWT_TOKEN");

    SwaggerModule.setup(
        "docs",
        app,
        document,
        isDevelopment && swaggerOptions(defaultJwtToken)
    );

    await app.listen(PORT);
    logger.log(`Server running on PORT ${PORT}`);
})();
