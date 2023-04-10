import { UsersContainer } from "./Users.styled";
import useUsers from "./useUsers";
import User, { IUser } from "../user/User";
import Search from "components/search/Search";

export type IUsers = IUser[];

const Users = () => {
    const { handleChange, filteredUsers, isLoading, error } = useUsers();

    const UsersList = () => {
        return (
            <>
                {isLoading ? (
                    <p style={{ color: "whitesmoke", paddingTop: "1rem" }}>
                        Ładowanie...
                    </p>
                ) : error ? (
                    <p style={{ color: "whitesmoke", paddingTop: "1rem" }}>
                        Wystąpił błąd podczas ładowania danych.
                    </p>
                ) : (
                    filteredUsers.map(({ id, username, userAvatar }: IUser) => (
                        <User
                            key={id}
                            id={id}
                            username={username}
                            userAvatar={userAvatar}
                        />
                    ))
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
