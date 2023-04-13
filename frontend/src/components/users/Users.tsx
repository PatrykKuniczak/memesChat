import { UsersContainer } from "./Users.styled";
import { IUser } from "../user/User";
import Search from "components/search/Search";
import useUsersContainer from "./UsersContainer";

export type IUsers = IUser[];

const Users = () => {
    const { UsersList, handleChange } = useUsersContainer();

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
