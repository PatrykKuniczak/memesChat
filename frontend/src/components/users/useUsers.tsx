import { IUsers } from "components/users/Users";
import dependlyComponentDisplay from "helpers/dependly-component-display";
import { ChangeEvent, useDeferredValue, useEffect, useState } from "react";
import { usersAfterFilter } from "helpers/onlineUsersFiltering";
import { useQuery } from "@tanstack/react-query";
import User, { IUser } from "../user/User";
import { getAllUsers } from "services/UsersService";
import useToken from "hooks/useToken";

const useUsers = () => {
    const [users, setUsers] = useState<IUsers>([]);
    const [filteredUsers, setFilteredUsers] = useState<IUsers>([]);
    const [searchValue, setSearchValue] = useState("");
    const deferredSearchValue = useDeferredValue(searchValue);
    const { userToken } = useToken();

    const { isLoading, data, error } = useQuery({
        queryKey: ["users"],
        queryFn: getAllUsers,
        enabled: !!userToken
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const UsersList = () => {
        const mappedFilteredUsers = filteredUsers.map(
            ({ id, username, userAvatar }: IUser) => (
                <User
                    key={id}
                    id={id}
                    username={username}
                    userAvatar={userAvatar}
                />
            )
        );

        return dependlyComponentDisplay({
            isLoading,
            error,
            data: mappedFilteredUsers
        });
    };

    useEffect(() => {
        setFilteredUsers(usersAfterFilter(users, deferredSearchValue));
    }, [deferredSearchValue, users]);

    useEffect(() => {
        data && setUsers(data);
    }, [data]);

    return {
        handleChange,
        setUsers,
        filteredUsers,
        isLoading,
        error,
        UsersList
    };
};

export default useUsers;
