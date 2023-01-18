import styled from "styled-components";
import { FONT_SIZES } from "constants/styleConstants";

const SignupContainer = styled.div`
    display: grid;
    place-content: center;
    grid-template-columns: min(40rem, 50%);
    height: 100vh;
`;

const Heading = styled.h1`
    color: ${({ theme }) => theme.white};
    font-size: ${FONT_SIZES.xxl};
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
`;

const Label = styled.label`
    color: ${({ theme }) => theme.gray_300};
    font-size: ${FONT_SIZES.md};
    margin-top: 1.5rem;
`;

const Input = styled.input`
    border-radius: 5px;
    border: 1px solid rgba(65, 65, 65, 0.66);
    padding: 1rem;
    margin-top: 0.5rem;

    background: rgba(112, 112, 112, 0.1);
    backdrop-filter: blur(27px);
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 4rem;
    justify-content: center;
    gap: 1.5rem;

    @media screen and (min-width: 800px) {
        flex-direction: row;
        align-items: center;
    }
`;

export { SignupContainer, Heading, Form, Input, Label, ButtonsContainer };
