import useToken from "hooks/useToken";
import { Navigate } from "react-router-dom";

const ProtectedPage = ({ children }: { children: JSX.Element }) => {
    const { userToken } = useToken();

    if (!userToken) {
        return (
            <Navigate
                to={"/auth/signIn"}
                replace
            />
        );
    }

    return <>{children}</>;
};

export default ProtectedPage;
