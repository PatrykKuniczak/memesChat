import useClickOutside from "hooks/useClickOutside";
import { useNavigate } from "react-router-dom";
import useToken from "hooks/useToken";
import { useAppSelector } from "store/store";

const useDropdownMenu = (changeMenuVisible: () => void) => {
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

    const { ref } = useClickOutside(handleClickOutside);

    return { ref, handleLogout, username };
};

export default useDropdownMenu;
