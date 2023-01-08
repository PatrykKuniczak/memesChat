import styled from "styled-components";
import { SIZES } from "constants/styleConstants";

const SignupContainer = styled.div`
    display: grid;
    place-content: center;
    padding-top: 10rem;
    height: 100vh;
`;

const Heading = styled.h1`
    color: #fff;
    font-size: ${SIZES.xxl};
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
`;

const Label = styled.label`
    color: ${(props) => props.theme.gray_300};
    font-size: ${SIZES.md};
    margin-top: 1.5rem;
`;

const Input = styled.input`
    border-radius: 5px;
    border: none;
    padding: 1rem;
    margin-top: 0.5rem;
    background-color: ${(props) => props.theme.gray_500};
`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 4rem;
`;

export { SignupContainer, Heading, Form, Input, Label, ButtonsContainer };
