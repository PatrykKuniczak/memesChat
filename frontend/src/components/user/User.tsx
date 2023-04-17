import defaultUserAvatar from "assets/defaultUserAvatar.png";
import { UserImage, UserName, UserContainer } from "./User.styled";
import useAvatar, { IUserAvatar } from "hooks/useAvatar";

export interface IUser {
    id: number;
    username: string;
    userAvatar: IUserAvatar | null;
}

const User = ({ username, userAvatar }: IUser) => {
    const avatarUrl = useAvatar(userAvatar?.id);

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
