import { Label, UsersListWrapper, UsersContainer } from "./Users.styled";
import useUsers from "./useUsers";
import User from "../user/User";
import {
	SearchIcon,
	SearchInput,
	SearchWrapper
} from "../search/Search.styled";

export interface IUser {
	username: string;
	id: number;
}

const Users = () => {
	const { searchUsersQuery, handleChange, users, filteredUsers } = useUsers();

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

	const Users: Function = (groups: {}[]): React.ReactElement[] =>
		searchUsersQuery === ""
			? users.map((user: IUser) => (
					<User
						key={user.id}
						id={user.id}
						username={user.username}
					/>
			  ))
			: filteredUsers.map(
					(user: any): JSX.Element => (
						<User
							key={user.id}
							id={user.id}
							username={user.username}
						/>
					)
			  );

	return (
		<UsersContainer>
			<Label>Online</Label>
			<UsersListWrapper>
				<SearchWrapper $variant={""}>
					<SearchInput
						placeholder="Find user"
						value={searchUsersQuery}
						onChange={handleChange}
					/>
					<SearchIcon />
				</SearchWrapper>
				<UsersList />
			</UsersListWrapper>
		</UsersContainer>
	);
};

export default Users;
