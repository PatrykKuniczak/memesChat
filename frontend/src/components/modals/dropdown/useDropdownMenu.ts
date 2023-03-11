import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { useNavigate } from "react-router-dom";
import useToken from "hooks/useToken";

const useDropdownMenu = (changeMenuVisible: () => void) => {
    const ref = useRef(null);
    const navigate = useNavigate();
    const { setAccessToken } = useToken();

    const handleClickOutside = () => {
        changeMenuVisible();
    };

    useOnClickOutside(ref, handleClickOutside);

    const handleLogout = () => {
        setAccessToken("");
        navigate("auth/signIn");
    };

    return { ref, handleLogout };
};

export default useDropdownMenu;
