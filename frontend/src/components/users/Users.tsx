import Search from "../search/Search";
import { Label, UsersListWrapper, UsersContainer } from "./Users.styled";
import useUsers from "./useUsers";

const Users = () => {
	const { UsersList } = useUsers();

	return (
		<UsersContainer>
			<Search />
			<Label>Online</Label>
			<UsersListWrapper>
				<UsersList />
			</UsersListWrapper>
		</UsersContainer>
	);
};

export default Users;
