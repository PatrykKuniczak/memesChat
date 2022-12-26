import React from "react";
import {
    ButtonsContainer,
    Form,
    Heading,
    Input,
    Label,
    SignupContainer,
} from "./Auth.styled";
import {NavLink, PrimaryButton} from "../../components/buttons/Button.styled";


const Auth: React.FC = () => {
    return (
        <SignupContainer>
            <Heading>Rejestracja</Heading>

            <Form action="">
                <Label htmlFor="login">Login</Label>
                <Input type="text" id="login" name="login"/>
                <Label htmlFor="password">Hasło</Label>
                <Input type="text" id="password" name="password"/>
                <Label htmlFor="password">Powtórz hasło</Label>
                <Input type="text" id="password" name="password"/>
            </Form>
            <ButtonsContainer>
                <PrimaryButton>Zarejestruj</PrimaryButton>
                <NavLink to="signin">Mam juz konto</NavLink>
            </ButtonsContainer>
        </SignupContainer>
    );
};

export default Auth;
