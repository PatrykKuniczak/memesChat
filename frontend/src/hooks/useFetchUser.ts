import { useQuery } from "@tanstack/react-query";
import useDecodeToken from "hooks/useDecodeToken";
import { getUser } from "services/UsersService";
import { IUser } from "components/user/User";

const useFetchUser = () => {
    const { id, userToken } = useDecodeToken();

    const {
        data: user,
        isInitialLoading,
        error
    } = useQuery<IUser>({
        queryKey: ["user", id, userToken],
        queryFn: () => getUser(id),
        enabled: !!id && id !== 0 && !!userToken
    });

    return { ...user, isInitialLoading, error };
};

export default useFetchUser;
