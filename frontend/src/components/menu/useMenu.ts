import { useAppDispatch, useAppSelector } from "store/store";
import { useEffect, useState } from "react";
import { fetchUser } from "store/slices/UserSlice";
import useCloseByEsc from "hooks/useCloseByEsc";
import useAvatar from "hooks/useAvatar";

export const useMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const dispatch = useAppDispatch();
    const { username, avatarId } = useAppSelector(state => state.user);

    const changeMenuVisible = () => {
        setShowMenu(prevState => !prevState);
    };

    useCloseByEsc(showMenu, changeMenuVisible);

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    const avatar = useAvatar(avatarId);

    return { username, showMenu, changeMenuVisible, avatar };
};
