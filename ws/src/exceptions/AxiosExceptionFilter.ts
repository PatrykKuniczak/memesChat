import { Catch, ArgumentsHost, BadRequestException } from "@nestjs/common";
import { BaseWsExceptionFilter } from "@nestjs/websockets";
import { AxiosError } from "axios";

interface IAxiosException {
    statusCode: number;
    message: string | string[];
    error: string;
}

@Catch(AxiosError, BadRequestException)
export class WebsocketExceptionsFilter extends BaseWsExceptionFilter {
    catch(exception: AxiosError | BadRequestException, host: ArgumentsHost) {
        const client = host.switchToWs().getClient();
        let exceptionData: IAxiosException;

        if (exception instanceof AxiosError) {
            exceptionData = exception.response.data as IAxiosException;

            if (exceptionData["statusCode"] === 500)
                exceptionData["error"] = exceptionData[
                    "message"
                ] as IAxiosException["error"];
        } else {
            exceptionData = exception.getResponse() as IAxiosException;
            if (exceptionData["message"] instanceof Array)
                exceptionData["message"] = exceptionData["message"][0];
        }

        client.emit("exception", exceptionData);
    }
}
