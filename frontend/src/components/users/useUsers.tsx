import { IUsers } from "components/users/Users";
import { ChangeEvent, useDeferredValue, useEffect, useState } from "react";
import { usersAfterFilter } from "helpers/onlineUsersFiltering";

const useUsers = () => {
	const [users, setUsers] = useState<IUsers>([]);
	const [filteredUsers, setFilteredUsers] = useState<IUsers>([]);
	const [searchValue, setSearchValue] = useState("");
	const deferredSearchValue = useDeferredValue(searchValue);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	useEffect(() => {
		setFilteredUsers(usersAfterFilter(users, deferredSearchValue));
	}, [deferredSearchValue, users]);

	useEffect(() => {
		fetch(`https://dummyjson.com/users/`)
			.then(response => response.json())
			.then(data => setUsers(data.users));
	}, []);

	return {
		handleChange,
		users,
		setUsers,
		filteredUsers
	};
};

export default useUsers;
