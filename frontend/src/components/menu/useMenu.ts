import { useAppSelector } from "store/store";
import { useState } from "react";
import useCloseByEsc from "hooks/useCloseByEsc";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "services/UsersService";
import { getAvatar } from "services/UsersAvatarService";
import useToken from "hooks/useToken";

export const useMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { id, username } = useAppSelector(state => state.user);
    const { userToken } = useToken();

    const changeMenuVisible = () => {
        setShowMenu(prevState => !prevState);
    };

    useCloseByEsc(showMenu, changeMenuVisible);

    const { data } = useQuery({
        queryKey: ["user2", id],
        queryFn: () => getUser(id),
        enabled: !!id && !!userToken
    });

    const { data: avatar } = useQuery({
        queryKey: ["avatar3", data?.userAvatar?.id],
        queryFn: () => getAvatar(data?.userAvatar?.id),
        select: URL.createObjectURL,
        enabled: !!data?.userAvatar?.id
    });

    return { username, showMenu, changeMenuVisible, avatar };
};
