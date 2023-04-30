export interface IRequestError {
    response: {
        data: {
            statusCode: number;
            message: string;
            error: string;
        };
    };
}
