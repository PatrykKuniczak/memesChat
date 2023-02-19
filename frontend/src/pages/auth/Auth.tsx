import { Heading, SignupContainer } from "./Auth.styled";
import { useParams } from "react-router-dom";
import Form from "components/Form/Form";
import { useMemo } from "react";

const Auth = () => {
    const { eventType } = useParams();

    const isSignUp = useMemo(() => eventType === "signUp", [eventType]);

    return (
        <SignupContainer>
            <Heading>{isSignUp ? "Rejestracja" : "Logowanie"}</Heading>

            <Form isSignUp={isSignUp} />
        </SignupContainer>
    );
};

export default Auth;
