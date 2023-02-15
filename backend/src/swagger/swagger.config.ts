import { DocumentBuilder } from "@nestjs/swagger";

const swaggerConfig = new DocumentBuilder()
    .setTitle("Live Chat API")
    .setDescription("Docs For Amazing Memes Live Chat")
    .addTag("liveChat")
    .addBearerAuth()
    .build();

export default swaggerConfig;
