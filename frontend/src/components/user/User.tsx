import defaultUserAvatar from "assets/defaultUserAvatar.png";
import { UserImage, UserName, UserContainer } from "./User.styled";
import { IUserAvatar } from "hooks/useAvatar";
import { useQuery } from "@tanstack/react-query";
import { getAvatar } from "services/UsersAvatarService";

export interface IUser {
    id: number;
    username: string;
    userAvatar: IUserAvatar | null;
}

const User = ({ username, userAvatar }: IUser) => {
    const { data: avatarUrl } = useQuery({
        queryKey: ["avatar3", userAvatar?.id],
        queryFn: () => getAvatar(userAvatar?.id),
        select: URL.createObjectURL,
        enabled: !!userAvatar?.id
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
