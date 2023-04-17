import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export interface IUserAvatar {
    id: number;
    sourcePath: string;
}

const useAvatar = (userAvatar: number | null | undefined) => {
    const fetchAvatar = async () => {
        const { data } = await axios.get(`users-avatar/${userAvatar}`, {
            responseType: "blob"
        });
        return data;
    };

    const { data: avatarUrl } = useQuery({
        queryKey: ["avatar", userAvatar],
        queryFn: fetchAvatar,
        select: data => URL.createObjectURL(data),
        enabled: !!userAvatar
    });

    return avatarUrl;
};

export default useAvatar;
