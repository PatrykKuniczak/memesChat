import { UsersContainer } from "./Users.styled";
import { IUser } from "../user/User";
import Search from "components/search/Search";
import useUsers from "./useUsers";

export type IUsers = IUser[];

const Users = () => {
    const { UsersList, handleChange } = useUsers();

    return (
        <UsersContainer>
            <Search
                placeholder="Wyszukaj użytkownika"
                onChange={handleChange}
            />
            <UsersList />
        </UsersContainer>
    );
};

export default Users;
