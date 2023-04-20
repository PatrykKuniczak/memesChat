import { useQuery } from "@tanstack/react-query";
import { getAvatar } from "services/UsersAvatarService";

export interface IUserAvatar {
    id: number;
    sourcePath: string;
}

const useAvatar = (userAvatarId: number | null | undefined) => {
    const { data: avatarUrl } = useQuery({
        queryKey: ["avatar", userAvatarId],
        queryFn: () => getAvatar(userAvatarId),
        select: data => URL.createObjectURL(data),
        enabled: !!userAvatarId
    });

    return avatarUrl;
};

export default useAvatar;
