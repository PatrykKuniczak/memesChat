import user from "assets/user.jpg";
import { UserImage, UserName, UserContainer } from "./User.styled";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export interface IUser {
    username: string;
    id: number;
    userAvatar: {
        id: number;
        sourcePath: string;
    };
}

const User = ({ username, userAvatar }: IUser) => {
    const fetchAvatar = async () => {
        const { data } = await axios.get(`users-avatar/${userAvatar.id}`, {
            responseType: "blob"
        });
        return data;
    };

    const { data } = useQuery({
        queryKey: ["avatar", userAvatar?.id],
        queryFn: fetchAvatar,
        select: data => URL.createObjectURL(data),
        enabled: Boolean(userAvatar)
    });

    return (
        <UserContainer>
            <UserImage
                src={data || user}
                alt=""
            />
            <UserName>{username}</UserName>
        </UserContainer>
    );
};

export default User;
