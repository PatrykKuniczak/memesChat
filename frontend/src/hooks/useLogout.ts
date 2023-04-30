import axios from "axios";
import useToken from "hooks/useToken";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const navigate = useNavigate();
    const { setAccessToken } = useToken();

    const logoutUser = useCallback(() => {
        setAccessToken("");
        axios.defaults.headers.common.Authorization = null;
        navigate("auth/signIn");
    }, [navigate, setAccessToken]);

    return { logoutUser };
};

export default useLogout;
