import { useQuery } from "@tanstack/react-query";
import useFetchUser from "hooks/useFetchUser";
import { useState } from "react";
import { getAvatar } from "services/UsersAvatarService";

export interface IUserAvatar {
    id: number;
    sourcePath: string;
}

const useFetchAvatar = () => {
    const [userAvatar, setUserAvatar] = useState<Blob | null>(null);

    const {
        user,
        isInitialLoading: userFetchIsLoading,
        error: userFetchError
    } = useFetchUser();

    const userAvatarId = user?.userAvatar?.id ?? null;
    const username = user?.username ?? "";
    const userId = user?.id!;

    const handleAvatarChange = (newAvatar: Blob) => {
        setUserAvatar(newAvatar);
    };

    const { isInitialLoading: avatarFetchIsLoading, error: avatarFetchError } =
        useQuery({
            queryKey: ["avatar", userAvatarId],
            queryFn: () => getAvatar(userAvatarId),
            onSuccess: data => handleAvatarChange(data),
            enabled: !!userAvatarId
        });

    const isLoading = userFetchIsLoading || avatarFetchIsLoading;
    const error = userFetchError || avatarFetchError;

    const userAvatarUrl = userAvatar && URL.createObjectURL(userAvatar);

    return {
        userAvatar,
        userAvatarUrl,
        isLoading,
        username,
        error,
        handleAvatarChange,
        userId
    };
};

export default useFetchAvatar;
