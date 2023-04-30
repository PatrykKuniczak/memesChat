import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAvatar } from "services/UsersAvatarService";

export interface IUserAvatar {
    id: number;
    sourcePath: string;
}

const useFetchAvatar = (userAvatarId: number | null = null) => {
    const [userAvatar, setUserAvatar] = useState<Blob | null>(null);

    const handleAvatarChange = (newAvatar: Blob) => {
        setUserAvatar(newAvatar);
    };

    const { isInitialLoading: isLoading, error } = useQuery({
        queryKey: ["avatar", userAvatarId],
        queryFn: () => getAvatar(userAvatarId),
        onSuccess: handleAvatarChange,
        enabled: !!userAvatarId
    });

    const userAvatarUrl = userAvatar && URL.createObjectURL(userAvatar);

    return {
        userAvatar,
        userAvatarUrl,
        isLoading,
        error,
        handleAvatarChange
    };
};

export default useFetchAvatar;
