import { IUsers } from "components/users/Users";

export const usersAfterFilter = (users: IUsers, searchValue: string) => {
	return users.filter(user => {
		if (searchValue === null) {
			return true;
		}

		return user.username.toLowerCase().startsWith(searchValue.toLowerCase());
	});
};
