import User, { IUser } from "../user/User";
import useUsers from "./useUsers";

const useUsersContainer = () => {
    const { handleChange, filteredUsers, isLoading, error } = useUsers();

    const UsersList = () => {
        return (
            <>
                {isLoading ? (
                    <p style={{ color: "whitesmoke", paddingTop: "1rem" }}>
                        Ładowanie...
                    </p>
                ) : error ? (
                    <p style={{ color: "indianred", paddingTop: "1rem" }}>
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

    return { UsersList, handleChange };
};

export default useUsersContainer;
