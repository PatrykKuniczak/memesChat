import axios from "axios";
import { useLocalStorage } from "usehooks-ts";

const useSaveToken = () => {
    // eslint-disable-next-line
    const [_, setUserToken] = useLocalStorage("userToken", "");
    const setAccessToken = (accessToken: string) => {
        setUserToken(accessToken);
        axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${accessToken}`;
    };

    return { setAccessToken };
};

export default useSaveToken;
