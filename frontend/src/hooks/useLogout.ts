import { updateInterceptor } from "helpers/axios/AuthIncereptor";
import useToken from "hooks/useToken";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const navigate = useNavigate();
    const { setAccessToken } = useToken();

    const logoutUser = useCallback(() => {
        setAccessToken("");
        updateInterceptor(null);
        navigate("auth/signIn");
    }, [navigate, setAccessToken]);

    return { logoutUser };
};

export default useLogout;
