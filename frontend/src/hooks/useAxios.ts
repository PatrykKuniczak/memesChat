import { useState, useCallback } from "react";
import axios, { Method } from "axios";

type IUseAxios = {
    isLoading: boolean;
    error: string;
    sendRequest: (url: string, method?: Method, data?: any) => Promise<any>;
};

//USE THAT IT IF U WANT TO CREATE REQUEST FOR OTHER THAN /API PATH EP. FOR GET AVATAR use join( "/..") from path-browserify
const useAxios = (): IUseAxios => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const sendRequest = useCallback(
        async (url: string, method = "GET", data = null) => {
            setIsLoading(true);
            setError("");

            try {
                const response = await axios({
                    url,
                    method,
                    data
                });

                return response.data;
            } catch (err: any) {
                setError(err.message || "Something went wrong!");
            }

            setIsLoading(false);
        },
        []
    );

    return {
        isLoading,
        error,
        sendRequest
    };
};

export default useAxios;
