import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { useNavigate } from "react-router-dom";
import useToken from "hooks/useToken";
import { useAppSelector } from "store/store";

const useDropdownMenu = (changeMenuVisible: () => void) => {
    const ref = useRef(null);
    const navigate = useNavigate();
    const { setAccessToken } = useToken();

    const username = useAppSelector(state => state.user.username);

    const handleClickOutside = () => {
        changeMenuVisible();
    };

    const handleLogout = () => {
        setAccessToken("");
        navigate("auth/signIn");
    };

    useOnClickOutside(ref, handleClickOutside);

    return { ref, handleLogout, username };
};

export default useDropdownMenu;
