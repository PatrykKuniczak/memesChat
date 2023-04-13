import { useAppDispatch, useAppSelector } from "store/store";
import { useEffect, useState } from "react";
import { fetchUser } from "store/slices/UserSlice";
import useCloseByEsc from "hooks/useCloseByEsc";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

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

    const fetchAvatar = async () => {
        const { data } = await axios.get(`users-avatar/${avatarId}`, {
            responseType: "blob"
        });
        return data;
    };

    const { data } = useQuery({
        queryKey: ["avatar", avatarId],
        queryFn: fetchAvatar,
        select: URL.createObjectURL,
        enabled: !!avatarId
    });

    return { username, showMenu, changeMenuVisible, avatar: data };
};
