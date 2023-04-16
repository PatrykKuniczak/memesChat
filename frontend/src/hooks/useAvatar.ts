import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export interface IUserAvatar {
    id: number;
    sourcePath: string;
}

const useAvatar = (userAvatar: IUserAvatar | null) => {
    const fetchAvatar = async () => {
        const { data } = await axios.get(`users-avatar/${userAvatar?.id}`, {
            responseType: "blob"
        });
        return data;
    };

    const { data: avatarUrl } = useQuery({
        queryKey: ["avatar", userAvatar?.id],
        queryFn: fetchAvatar,
        select: data => URL.createObjectURL(data),
        enabled: !!userAvatar
    });

    return avatarUrl;
};

export default useAvatar;
