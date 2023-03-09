import { Catch, ArgumentsHost } from "@nestjs/common";
import { BaseWsExceptionFilter } from "@nestjs/websockets";
import { AxiosError } from "axios";

interface IAxiosException {
    statusCode: number;
    message: string | string[];
    error: string;
}

@Catch(AxiosError)
export class AxiosExceptionFilter extends BaseWsExceptionFilter {
    catch(exception: AxiosError, host: ArgumentsHost) {
        const client = host.switchToWs().getClient();
        const exceptionData: IAxiosException = exception.response.data as IAxiosException;

        if (exceptionData["statusCode"] === 500)
            exceptionData["error"] = exceptionData[
                "message"
            ] as IAxiosException["error"];

        client.emit("exception", exceptionData);
    }
}
