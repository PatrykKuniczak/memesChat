import User from "../user/User";

const useUsers = () => {
	const usersIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	const UsersList = () => {
		return (
			<>
				{usersIds.map(userId => (
					<User
						key={userId}
						userId={userId}
					/>
				))}
			</>
		);
	};

	return { UsersList };
};

export default useUsers;
