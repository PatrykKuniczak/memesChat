import { Heading, SignupContainer } from "./Auth.styled";
import { useParams } from "react-router-dom";
import Form from "components/Form/Form";

const Auth = () => {
    const { eventType } = useParams();
    const isSignUp = eventType === "signUp";

    return (
        <SignupContainer>
            <Heading>{isSignUp ? "Rejestracja" : "Logowanie"}</Heading>
            <Form isSignUp={isSignUp} />
        </SignupContainer>
    );
};

export default Auth;
