import defaultUserAvatar from "assets/defaultUserAvatar.png";
import { UserImage, UserName, UserContainer } from "./User.styled";
import useFetchAvatar, { IUserAvatar } from "hooks/useFetchAvatar";

export interface IUser {
    id: number;
    username: string;
    userAvatar: IUserAvatar | null;
}

const User = ({ username, userAvatar }: IUser) => {
    const { userAvatarUrl } = useFetchAvatar(userAvatar?.id);

    return (
        <UserContainer>
            <UserImage
                src={userAvatarUrl || defaultUserAvatar}
                alt="user"
            />
            <UserName>{username}</UserName>
        </UserContainer>
    );
};

export default User;
