import { SetStateAction, useEffect, useState } from "react";

export interface IUser {
	username: string;
	id: number;
}

const useUsers = () => {
	const [users, setUsers] = useState([]);
	const [filteredUsers, setFilteredUsers] = useState<[] | {}[]>([]);
	const [searchUsersQuery, setSearchUsersQuery] = useState("");

	const handleChange = (event: {
		target: { value: SetStateAction<string> };
	}) => {
		setSearchUsersQuery(event.target.value);
	};

	useEffect(() => {
		const filterUsers = (users: {}[], searchUsersQuery: string) => {
			const filtered = users.filter((user: any) =>
				user.username.toLowerCase().includes(searchUsersQuery.toLowerCase())
			);
			setFilteredUsers(filtered);
		};
		filterUsers(users, searchUsersQuery);
	}, [searchUsersQuery, users]);

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
