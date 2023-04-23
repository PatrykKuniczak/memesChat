import defaultUserAvatar from "assets/defaultUserAvatar.png";
import { UserImage, UserName, UserContainer } from "./User.styled";
import { IUserAvatar } from "hooks/useFetchAvatar";

export interface IUser {
    id: number;
    username: string;
    userAvatar: IUserAvatar | null;
}

const User = ({ username }: IUser) => {
    return (
        <UserContainer>
            <UserImage
                src={defaultUserAvatar}
                alt="user"
            />
            <UserName>{username}</UserName>
        </UserContainer>
    );
};

export default User;
