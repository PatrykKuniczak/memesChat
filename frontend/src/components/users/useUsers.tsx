import User from "../user/User";

const useUsers = () => {
    const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const UsersList = () => {
        return (
            <>
                {users.map((user) => (
                    <User key={user} />
                ))}
            </>
        );
    };

    return { UsersList };
};

export default useUsers;
