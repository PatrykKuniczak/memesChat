import { IUser } from "components/users/useUsers";

export const usersAfterFilter = (users: IUser[], searchValue: string) => {
	return users.filter(user => {
		if (searchValue === null) {
			return true;
		}
		return user.username.toLowerCase().startsWith(searchValue.toLowerCase());
	});
};
