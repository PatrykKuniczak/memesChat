import { IUsers } from "components/users/Users";
import { ChangeEvent, useDeferredValue, useEffect, useState } from "react";
import { usersAfterFilter } from "helpers/onlineUsersFiltering";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

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
        if (data) {
            setUsers(data);
        }
    }, [data]);

    return {
        handleChange,
        users: data,
        setUsers,
        filteredUsers,
        isLoading,
        error
    };
};

export default useUsers;
