import { IUser } from "components/user/User";
import useLogout from "hooks/useLogout";
import useToken from "hooks/useToken";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";

type TUserDecodedData = Omit<IUser, "userAvatar">;

const useDecodeToken = () => {
    const { userToken } = useToken();
    const { logoutUser } = useLogout();
    const [id, setId] = useState(0);
    const [username, setUsername] = useState("");

    useEffect(() => {
        const decode = async () => {
            try {
                const { id, username } = await jwtDecode<TUserDecodedData>(
                    userToken
                );

                setId(id);
                setUsername(username);
            } catch (err) {
                logoutUser();
            }
        };

        decode();
    }, [logoutUser, userToken]);

    return { id, username, userToken };
};

export default useDecodeToken;
