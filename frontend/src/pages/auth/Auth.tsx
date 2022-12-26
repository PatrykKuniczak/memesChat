import React from "react";
import {
  ButtonsContainer,
  Form,
  Heading,
  Input,
  Label,
  SignupContainer
} from "./Auth.styled";
import { NavLink, PrimaryButton } from "../../components/buttons/Button.styled";
import { useParams } from "react-router-dom";

const Auth: React.FC = () => {
  let { type } = useParams();

  return (
    <SignupContainer>
      <Heading>{type === "signup" ? "Rejestracja" : "Logowanie"}</Heading>

      <Form action="">
        <Label htmlFor="login">Login</Label>
        <Input type="text" id="login" name="login" />
        <Label htmlFor="password">Hasło</Label>
        <Input type="text" id="password" name="password" />
        {type === "signup" && (
          <>
            <Label htmlFor="password">Powtórz hasło</Label>
            <Input type="text" id="password" name="password" />
          </>
        )}
      </Form>

      <ButtonsContainer>
        <PrimaryButton>
          {type === "signup" ? "Zarejestruj" : "Zaloguj"}
        </PrimaryButton>
        {type === "signup" ? (
          <NavLink to="signin">Mam juz konto</NavLink>
        ) : (
          <NavLink to="signup">Nie mam jeszcze konta</NavLink>
        )}
      </ButtonsContainer>
    </SignupContainer>
  );
};

export default Auth;
