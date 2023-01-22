import { useAppDispatch, useAppSelector } from "store/store";
import { useEffect, useState } from "react";
import { fetchUser } from "store/slices/UserSlice";

export const useMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const dispatch = useAppDispatch();
    const username = useAppSelector(state => state.user.username);

    const changeMenuVisible = () => {
        setShowMenu(prevState => !prevState);
    };

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    return { username, showMenu, changeMenuVisible };
};