import { DocumentBuilder } from "@nestjs/swagger";

const description = `
    You have here all endpoints which can be tested like in postman/insomnia.
    
    On click "Authorize", the hint should be displayed and there jwt token is stored,
    you must generate one of them and paste it here, or in dev.env file, and it's loaded automatically,
    read more in CONTRIBUTION.
    
    Endpoints with "padlock" icon, require BearerAuth.

    All schemas and DTO from backend, are located at the bottom of the page.
    
    If message is not described near to the http status code, it's default e.g for 404 is "Not Found"
`;

const swaggerConfig = new DocumentBuilder()
    .setTitle("Live Chat API")
    .setDescription(description)
    .addTag("liveChat API")
    .addBearerAuth(undefined, "defaultBearerAuth")
    .build();

export const swaggerOptions = (defaultJwtToken: string) => ({
    swaggerOptions: {
        authAction: {
            defaultBearerAuth: {
                name: "defaultBearerAuth",
                schema: {
                    description: "Default",
                    type: "http",
                    in: "header",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                },
                value: defaultJwtToken
            }
        }
    }
});

export default swaggerConfig;
