import { ChangeEvent, useEffect, useState } from "react";

export interface IUser {
	username: string;
	id: number;
}

const useUsers = () => {
	const [users, setUsers] = useState([]);
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [searchUsersQuery, setSearchUsersQuery] = useState("");

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchUsersQuery(event.target.value);

		const filterUsers = (searchUsersQuery: string) => {
			const filtered = users.filter((user: IUser) =>
				user.username.toLowerCase().includes(searchUsersQuery.toLowerCase())
			);
			setFilteredUsers(filtered);
		};
		filterUsers(searchUsersQuery);
	};

	useEffect(() => {
		fetch(`https://dummyjson.com/users/`)
			.then(response => response.json())
			.then(data => setUsers(data.users));
	}, []);

	return {
		searchUsersQuery,
		setSearchUsersQuery,
		handleChange,
		users,
		setUsers,
		filteredUsers
	};
};

export default useUsers;
