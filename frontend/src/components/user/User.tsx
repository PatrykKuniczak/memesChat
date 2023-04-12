import defaultUserAvatar from "assets/defaultUserAvatar.png";
import { UserImage, UserName, UserContainer } from "./User.styled";
import useAvatar from "hooks/useAvatar";

export interface IUser {
    username: string;
    id: number;
    userAvatar: {
        id: number;
        sourcePath: string;
    };
}

const User = ({ username, userAvatar }: IUser) => {
    const avatarUrl = useAvatar(userAvatar);

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
