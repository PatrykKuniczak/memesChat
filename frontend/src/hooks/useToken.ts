import axios from "axios";
import { useLocalStorage } from "usehooks-ts";

const useToken = () => {
    // eslint-disable-next-line
    const [userToken, setUserToken] = useLocalStorage("userToken", "");
    const setAccessToken = (accessToken: string) => {
        setUserToken(accessToken);
        axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${accessToken}`;
    };

    return { userToken, setAccessToken };
};

export default useToken;
