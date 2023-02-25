import { Label, UsersListWrapper, UsersContainer } from "./Users.styled";
import useUsers from "./useUsers";
import User from "../user/User";
import Search from "components/search/Search";

export interface IUser {
	username: string;
	id: number;
}

const Users = () => {
	const { handleChange, filteredUsers, users } = useUsers();

	const UsersList = () => {
		return (
			<>
				{users.length === 0 ? (
					<span style={{ color: "white" }}>Loading...</span>
				) : (
					<Users />
				)}
			</>
		);
	};

	const Users = () => (
		<>
			{filteredUsers.map(({ id, username }: IUser) => (
				<User
					key={id}
					id={id}
					username={username}
				/>
			))}
		</>
	);

	return (
		<UsersContainer>
			<Label>Online</Label>
			<UsersListWrapper>
				<Search
					placeholder="Find user"
					onChange={handleChange}
				/>
				<UsersList />
			</UsersListWrapper>
		</UsersContainer>
	);
};

export default Users;
