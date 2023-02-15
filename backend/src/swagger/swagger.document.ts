import { SwaggerModule } from "@nestjs/swagger";
import swaggerConfig from "swagger/swagger.config";
import { User } from "users/model/users.entity";
import { UserAvatar } from "usersAvatar/model/usersAvatar.entity";
import { validationMetadatasToSchemas } from "class-validator-jsonschema";
import {
    ReferenceObject,
    SchemaObject
} from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";
import { INestApplication } from "@nestjs/common";
import {JwtToken} from "swagger/jwt-token.property.dto";

export const createDocumentWrapper = (app: INestApplication) => {
    const document = SwaggerModule.createDocument(app, swaggerConfig, {
        extraModels: [User, UserAvatar, JwtToken]
    });

    const schemas = validationMetadatasToSchemas();

    const userAvatarSchema = {
        type: "object",
        properties: {
            userAvatar: { type: "string", format: "binary", required: "false" }
        }
    };

    schemas.UpdateUserDto.properties["userAvatar"] = userAvatarSchema.properties
        .userAvatar as Record<string, SchemaObject | ReferenceObject>;

    document.components.schemas = {
        ...document.components.schemas,
        ...schemas
    } as Record<string, SchemaObject | ReferenceObject>;

    return { document };
};
