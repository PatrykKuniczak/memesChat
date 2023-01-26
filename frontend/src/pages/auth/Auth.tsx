import {
    ButtonsContainer,
    Form,
    Heading,
    Input,
    Label,
    SignupContainer
} from "./Auth.styled";
import { NavLink, PrimaryButton } from "components/buttons/Button.styled";
import { useParams } from "react-router-dom";

const Auth = () => {
    const { eventType } = useParams();

    return (
        <SignupContainer>
            <>
                <Heading>
                    {eventType === "signUp" ? "Rejestracja" : "Logowanie"}
                </Heading>

                <Form action="">
                    <Label htmlFor="login">Login</Label>
                    <Input type="text" id="login" name="login" />
                    <Label htmlFor="password">Hasło</Label>
                    <Input type="text" id="password" name="password" />
                    {eventType === "signUp" && (
                        <>
                            <Label htmlFor="password">Powtórz hasło</Label>
                            <Input type="text" id="password" name="password" />
                        </>
                    )}
                </Form>

                <ButtonsContainer>
                    <PrimaryButton>
                        {eventType === "signUp" ? "Zarejestruj" : "Zaloguj"}
                    </PrimaryButton>
                    {eventType === "signUp" ? (
                        <NavLink to="/auth/signIn">Mam juz konto</NavLink>
                    ) : (
                        <NavLink to="/auth/signUp">
                            Nie mam jeszcze konta
                        </NavLink>
                    )}
                </ButtonsContainer>
            </>
        </SignupContainer>
    );
};

export default Auth;
