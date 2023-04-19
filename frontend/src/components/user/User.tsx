import defaultUserAvatar from "assets/defaultUserAvatar.png";
import { UserImage, UserName, UserContainer } from "./User.styled";
import { IUserAvatar } from "hooks/useAvatar";
import { useQuery } from "@tanstack/react-query";
import { getAvatar } from "services/UsersAvatarService";
import { getUser } from "services/UsersService";

export interface IUser {
    id: number;
    username: string;
    userAvatar: IUserAvatar | null;
}

const User = ({ id, username }: IUser) => {
    const { data } = useQuery({
        queryKey: ["user", id],
        queryFn: () => getUser(id),
        enabled: !!id
    });

    const { data: avatarUrl } = useQuery({
        queryKey: ["avatar3", data?.userAvatar?.id],
        queryFn: () => getAvatar(data?.userAvatar?.id),
        select: URL.createObjectURL,
        enabled: !!data?.userAvatar?.id
    });

    return (
        <UserContainer>
            <UserImage
                src={avatarUrl || defaultUserAvatar}
                alt="user"
            />
            <UserName>{username}</UserName>
        </UserContainer>
    );
};

export default User;
