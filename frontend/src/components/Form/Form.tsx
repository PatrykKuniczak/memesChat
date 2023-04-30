import { FC, useEffect } from "react";
import { NavLink, PrimaryButton } from "components/buttons/Button.styled";
import FormField from "components/FormField/FormField";
import useForm from "../../components/Form/useForm";
import { ButtonsContainer, FormWrapper } from "./Form.styled";
import { ErrorIndicator } from "assets/styles/theme";

const Form: FC<{ isSignUp: boolean }> = ({ isSignUp }) => {
    const {
        handleChange,
        values,
        handleSubmit,
        errors,
        touched,
        resetForm,
        error,
        resetRequest
    } = useForm({
        isSignUp
    });

    useEffect(() => {
        resetForm();
        resetRequest();
    }, [isSignUp, resetRequest, resetForm]);

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <FormField
                label="Login"
                type="text"
                id="login"
                onChange={handleChange}
                value={values.login}
                error={touched.login && errors.login}
            />
            <FormField
                label="Hasło"
                type="password"
                id="password"
                onChange={handleChange}
                value={values.password}
                error={touched.password && errors.password}
            />
            {isSignUp && (
                <FormField
                    label="Powtórz hasło"
                    type="password"
                    id="passwordConfirmation"
                    onChange={handleChange}
                    value={values.passwordConfirmation}
                    error={
                        touched.passwordConfirmation &&
                        errors.passwordConfirmation
                    }
                />
            )}
            <ButtonsContainer>
                <PrimaryButton type={"submit"}>
                    {isSignUp ? "Zarejestruj" : "Zaloguj"}
                </PrimaryButton>
                {isSignUp ? (
                    <NavLink to="/auth/signIn">Mam juz konto</NavLink>
                ) : (
                    <NavLink to="/auth/signUp">Nie mam jeszcze konta</NavLink>
                )}
            </ButtonsContainer>
            {error && (
                <ErrorIndicator>
                    {error.response
                        ? error.response.data.message
                        : "Network error"}
                </ErrorIndicator>
            )}
        </FormWrapper>
    );
};

export default Form;
