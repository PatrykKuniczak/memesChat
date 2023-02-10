import { Key, useEffect, useState } from "react";
import User from "../user/User";

export interface IUser {
	username: string;
	id: number;
}

const useUsers = () => {
	const [users, setUsers] = useState<any>([]);

	useEffect(() => {
		fetch(`https://dummyjson.com/users/`)
			.then(response => response.json())
			.then(data =>
				setUsers(
					data.users.sort(function (a: any, b: any) {
						if (a.username < b.username) {
							return -1;
						}
						if (a.username > b.username) {
							return 1;
						}
						return 0;
					})
				)
			);
	}, []);

	const UsersList = () => {
		return (
			<>
				{users.length === 0 ? (
					<span style={{ color: "white" }}>Loading...</span>
				) : (
					users.map((user: IUser) => (
						<User
							key={user.id}
							id={user.id}
							username={user.username}
						/>
					))
				)}
			</>
		);
	};

	return { UsersList };
};

export default useUsers;
