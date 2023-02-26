import user from "assets/user.jpg";
import { UserImage, UserName, UserContainer } from "./User.styled";

export interface IUser {
	username: string;
	id: number;
}

const User = ({ username }: IUser) => {
	return (
		<UserContainer>
			<UserImage src={user} />
			<UserName>{username}</UserName>
		</UserContainer>
	);
};

export default User;
