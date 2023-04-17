import useClickOutside from "hooks/useClickOutside";
import { useNavigate } from "react-router-dom";
import useToken from "hooks/useToken";
import { useAppSelector } from "store/store";
import useAvatar from "hooks/useAvatar";

const useDropdownMenu = (changeMenuVisible: () => void) => {
    const navigate = useNavigate();
    const { setAccessToken } = useToken();

    const { username, avatarId } = useAppSelector(state => state.user);

    const handleClickOutside = () => {
        changeMenuVisible();
    };

    const handleLogout = () => {
        setAccessToken("");
        navigate("auth/signIn");
    };

    const { ref } = useClickOutside(handleClickOutside);

    let avatar = useAvatar(avatarId);

    return { ref, handleLogout, username, avatar };
};

export default useDropdownMenu;
