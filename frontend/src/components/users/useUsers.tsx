import { IUsers } from "components/users/Users";
import { ChangeEvent, useDeferredValue, useEffect, useState } from "react";
import { usersAfterFilter } from "helpers/onlineUsersFiltering";

const useUsers = () => {
	const [users, setUsers] = useState<IUsers>([]);
	const [filteredUsers, setFilteredUsers] = useState<IUsers>([]);
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
