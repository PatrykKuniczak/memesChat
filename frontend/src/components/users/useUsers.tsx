import { ChangeEvent, useDeferredValue, useEffect, useState } from "react";
import { usersAfterFilter } from "helpers/onlineUsersFiltering";

export interface IUser {
	username: string;
	id: number;
}

const useUsers = () => {
	const [users, setUsers] = useState([]);
	const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
	const [searchUsersQuery, setSearchUsersQuery] = useState("");
	const deferredSearchUsersQuery = useDeferredValue(searchUsersQuery);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchUsersQuery(event.target.value);
	};

	useEffect(() => {
		setFilteredUsers(usersAfterFilter(users, deferredSearchUsersQuery));
	}, [deferredSearchUsersQuery, users]);

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
