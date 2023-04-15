import { IUsers } from "components/users/Users";
import { ChangeEvent, useDeferredValue, useEffect, useState } from "react";
import { usersAfterFilter } from "helpers/onlineUsersFiltering";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import User, { IUser } from "../user/User";

const useUsers = () => {
    const [users, setUsers] = useState<IUsers>([]);
    const [filteredUsers, setFilteredUsers] = useState<IUsers>([]);
    const [searchValue, setSearchValue] = useState("");
    const deferredSearchValue = useDeferredValue(searchValue);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const fetchAllUsers = async () => {
        const { data } = await axios.get("users");
        return data;
    };

    const { isLoading, data, error } = useQuery({
        queryKey: ["users"],
        queryFn: fetchAllUsers
    });

    useEffect(() => {
        setFilteredUsers(usersAfterFilter(users, deferredSearchValue));
    }, [deferredSearchValue, users]);

    useEffect(() => {
        data && setUsers(data);
    }, [data]);

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

    return {
        handleChange,
        users: data,
        setUsers,
        filteredUsers,
        isLoading,
        error,
        UsersList
    };
};

export default useUsers;
