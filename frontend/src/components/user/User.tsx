import user from "assets/user.jpg";
import { UserImage, UserName, UserContainer } from "./User.styled";

const User = () => {
    return (
        <UserContainer>
            <UserImage src={user} />
            <UserName>John Doe</UserName>
        </UserContainer>
    );
};

export default User;
