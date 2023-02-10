import user from "assets/user.jpg";
import { UserImage, UserName, UserContainer } from "./User.styled";
import { IUser } from '../users/useUsers'

const User = ({ username, id }: IUser) => {
	return (
		<UserContainer>
			<UserImage src={user} />
			<UserName>
				{username}
			</UserName>
		</UserContainer>
	);
};

export default User;
