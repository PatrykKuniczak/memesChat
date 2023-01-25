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
import useForm from "./useForm";

const Auth = () => {
    const { eventType } = useParams();
    const isSignUp = eventType === "signUp";
    const { handleChange, values, handleSubmit, errors, touched } = useForm({ isSignUp });

    return (
        <SignupContainer>
            <Heading>{isSignUp ? "Rejestracja" : "Logowanie"}</Heading>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="login">Login</Label>
                <Input
                    type="text"
                    id="login"
                    name="login"
                    onChange={handleChange}
                    value={values.login}
                />
                {touched.login && errors.login && <p>{errors.login}</p>}
                <Label htmlFor="password">Hasło</Label>
                <Input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                />
                {touched.password && errors.password && (
                    <p>{errors.password}</p>
                )}
                {isSignUp && (
                    <>
                        <Label htmlFor="passwordConfirmation">
                            Powtórz hasło
                        </Label>
                        <Input
                            type="password"
                            id="passwordConfirmation"
                            name="passwordConfirmation"
                            onChange={handleChange}
                            value={values.passwordConfirmation}
                        />
                        {touched.passwordConfirmation &&
                            errors.passwordConfirmation && (
                                <p>{errors.passwordConfirmation}</p>
                            )}
                    </>
                )}
                <ButtonsContainer>
                    <PrimaryButton type="submit">
                        {isSignUp ? "Zarejestruj" : "Zaloguj"}
                    </PrimaryButton>
                    {isSignUp ? (
                        <NavLink to="/auth/signIn">Mam juz konto</NavLink>
                    ) : (
                        <NavLink to="/auth/signUp">
                            Nie mam jeszcze konta
                        </NavLink>
                    )}
                </ButtonsContainer>
            </Form>
        </SignupContainer>
    );
};

export default Auth;
