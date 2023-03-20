import { UsersContainer } from "./Users.styled";
import useUsers from "./useUsers";
import User, { IUser } from "../user/User";
import Search from "components/search/Search";

export type IUsers = IUser[];

const Users = () => {
    const { handleChange, filteredUsers, users } = useUsers();

    const Users = () => (
        <>
            {filteredUsers.map(({ id, username }: IUser) => (
                <User
                    key={id}
                    id={id}
                    username={username}
                />
            ))}
        </>
    );

    const UsersList = () => {
        return (
            <>
                {users.length === 0 ? (
                    <div style={{ color: "mediumpurple", paddingTop: "1rem" }}>
                        Ładowanie..
                    </div>
                ) : (
                    <Users />
                )}
            </>
        );
    };

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
