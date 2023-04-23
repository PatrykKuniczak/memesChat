import { useCallback } from "react";
import { useLocalStorage } from "usehooks-ts";

const useToken = () => {
    const [userToken, setUserToken] = useLocalStorage("userToken", "");

    const setAccessToken = useCallback(
        (accessToken: string) => {
            setUserToken(accessToken);
        },
        [setUserToken]
    );

    return { userToken, setAccessToken };
};

export default useToken;
