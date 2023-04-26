import defaultUserAvatar from "assets/defaultUserAvatar.png";
import { MenuUserImage, MenuUserName } from "components/menu/Menu.styled";
import dependlyComponentDisplay from "helpers/dependly-component-display";
import { useState } from "react";
import useCloseByEsc from "hooks/useCloseByEsc";
import useFetchAvatar from "hooks/useFetchAvatar";
import useFetchUser from "hooks/useFetchUser";

export const useMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const { username, userAvatar } = useFetchUser();
    const { userAvatarUrl, error, isLoading } = useFetchAvatar(userAvatar?.id);

    const changeMenuVisible = () => {
        setShowMenu(prevState => !prevState);
    };

    const menuProfileHandler = () => {
        const menuProfileContentDisplay = (
            <>
                <MenuUserName>{username}</MenuUserName>
                <MenuUserImage
                    src={userAvatarUrl || defaultUserAvatar}
                    onClick={changeMenuVisible}
                />
            </>
        );

        return dependlyComponentDisplay({
            isLoading,
            error,
            data: menuProfileContentDisplay
        });
    };

    useCloseByEsc(showMenu, changeMenuVisible);

    return {
        showMenu,
        changeMenuVisible,
        menuProfileHandler
    };
};
