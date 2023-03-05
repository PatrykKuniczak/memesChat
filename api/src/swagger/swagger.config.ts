import { DocumentBuilder } from "@nestjs/swagger";

const description = `
    U have here all endpoints which can be tested like in postman/insomnia.
    
    In the "Authorize" hint token is stored, you must generate one of it and paste it here,
    
    notice: that token expire in 7 days, and is validated on API, if u try to use Token
    from 1 user, and try to hit endpoint with other user id, that throw Forbidden Exception.   
    
    Endpoints with "padlock" icon, require BearerAuth

    All schemas from backend, are located at the bottom of the page`;

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
