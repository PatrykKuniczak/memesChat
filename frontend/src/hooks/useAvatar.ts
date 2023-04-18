import { useQuery } from "@tanstack/react-query";
import { getAvatar } from "services/UsersAvatarService";

export interface IUserAvatar {
    id: number;
    sourcePath: string;
}

const useAvatar = (userAvatar: number | null | undefined) => {
    const { data: avatarUrl } = useQuery({
        queryKey: ["avatar", userAvatar],
        queryFn: () => getAvatar(userAvatar),
        select: data => URL.createObjectURL(data),
        enabled: !!userAvatar
    });

    return avatarUrl;
};

export default useAvatar;
