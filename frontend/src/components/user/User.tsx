import user from "assets/user.jpg";
import { UserImage, UserName, UserContainer } from "./User.styled";

const User = ({ userId }: { userId: number }) => {
	return (
		<UserContainer>
			<UserImage src={user} />
			<UserName>{userId % 2 === 0 ? "John Doe" : "Else"}</UserName>
		</UserContainer>
	);
};

export default User;
