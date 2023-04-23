import defaultUserAvatar from "assets/defaultUserAvatar.png";
import { MenuUserImage, MenuUserName } from "components/menu/Menu.styled";
import dependlyComponentDisplay from "helpers/dependly-component-display";
import { useState } from "react";
import useCloseByEsc from "hooks/useCloseByEsc";
import useFetchAvatar from "hooks/useFetchAvatar";

export const useMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { username, userAvatarUrl, error, isLoading } = useFetchAvatar();

    const changeMenuVisible = () => {
        setShowMenu(prevState => !prevState);
    };

    const menuProfileHandler = () => {
        const menuProfileContent = (
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
            data: menuProfileContent
        });
    };

    useCloseByEsc(showMenu, changeMenuVisible);

    return {
        showMenu,
        changeMenuVisible,
        menuProfileHandler
    };
};
