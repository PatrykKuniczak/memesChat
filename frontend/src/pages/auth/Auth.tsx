import { Heading, SignupContainer } from "./Auth.styled";
import { Navigate, useParams } from "react-router-dom";
import Form from "components/Form/Form";
import { useMemo } from "react";
import useToken from "hooks/useToken";

const Auth = () => {
    const { eventType } = useParams();
    const { userToken } = useToken();
    const isSignUp = useMemo(() => eventType === "signUp", [eventType]);

    if (userToken) {
        return (
            <Navigate
                to={"/"}
                replace
            />
        );
    }

    return (
        <SignupContainer>
            <Heading>{isSignUp ? "Rejestracja" : "Logowanie"}</Heading>

            <Form isSignUp={isSignUp} />
        </SignupContainer>
    );
};

export default Auth;
