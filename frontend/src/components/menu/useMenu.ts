import { useAppSelector } from "store/store";
import { useState } from "react";
import useCloseByEsc from "hooks/useCloseByEsc";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "services/UsersService";
import useToken from "hooks/useToken";
import useAvatar from "hooks/useAvatar";

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

    const avatar = useAvatar(data?.userAvatar?.id);

    return { username, showMenu, changeMenuVisible, avatar };
};
