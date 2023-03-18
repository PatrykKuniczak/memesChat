import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    BadRequestException,
    HttpStatus
} from "@nestjs/common";
import { Response } from "express";

interface IExceptionResponseValues {
    statusCode: HttpStatus.BAD_REQUEST;
    message: string | string[];
    error: keyof HttpStatus.BAD_REQUEST;
}

@Catch(BadRequestException)
export class ValidationErrorFilter implements ExceptionFilter {
    catch(exception: BadRequestException, host: ArgumentsHost) {
        const response = host.switchToHttp().getResponse<Response>();
        const exceptionResponse =
            exception.getResponse() as IExceptionResponseValues;

        exceptionResponse.message =
            exceptionResponse.message instanceof Array
                ? exceptionResponse.message[0]
                : exceptionResponse.message;

        response.status(exceptionResponse.statusCode).json({
            statusCode: exceptionResponse.statusCode,
            message: exceptionResponse.message,
            error: exceptionResponse.error
        });
    }
}
