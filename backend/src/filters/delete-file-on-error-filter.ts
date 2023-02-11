import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    BadRequestException,
    InternalServerErrorException
} from "@nestjs/common";
import { Request, Response } from "express";
import { unlinkSync } from "fs";

@Catch(BadRequestException)
export class DeleteFileOnErrorFilter implements ExceptionFilter {
    catch(exception: BadRequestException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();

        if (request.file)
            try {
                unlinkSync(request.file.path);
            } catch (err) {
                throw new InternalServerErrorException(err);
            }

        response.status(status).json(exception.getResponse());
    }
}
