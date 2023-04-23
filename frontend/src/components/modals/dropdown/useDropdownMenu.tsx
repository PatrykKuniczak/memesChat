import defaultUserAvatar from "assets/defaultUserAvatar.png";
import {
    MenuProfileWrapperMobile,
    MenuUserImage,
    MenuUserName
} from "components/menu/Menu.styled";
import dependlyComponentDisplay from "helpers/dependly-component-display";
import useClickOutside from "hooks/useClickOutside";
import useFetchAvatar from "hooks/useFetchAvatar";

const useDropdownMenu = (changeMenuVisible: () => void) => {
    const { username, userAvatarUrl, error, isLoading } = useFetchAvatar();

    const handleClickOutside = () => {
        changeMenuVisible();
    };

    const { ref } = useClickOutside(handleClickOutside);

    const menuProfileHandler = () => {
        const menuProfileWrapper = (
            <MenuProfileWrapperMobile>
                <MenuUserName>{username}</MenuUserName>
                <MenuUserImage
                    src={userAvatarUrl || defaultUserAvatar}
                    onClick={changeMenuVisible}
                />
            </MenuProfileWrapperMobile>
        );

        return dependlyComponentDisplay({
            isLoading,
            error,
            data: menuProfileWrapper
        });
    };
    return { ref, menuProfileHandler };
};

export default useDropdownMenu;
