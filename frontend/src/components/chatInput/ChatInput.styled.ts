import styled, { css } from "styled-components";
import { BsImage, BsStars } from "react-icons/bs";

const InputWrapper = styled.header`
    display: flex;
    align-items: center;

    margin: 2rem;
    padding: 0.5rem 1rem 0.5rem;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.gray_400};
`;

const Form = styled.form`
    width: 100%;
`;

const MessageInput = styled.input`
    padding: 1rem;
    width: 100%;
    outline: transparent;
    border: transparent;

    color: ${({ theme }) => theme.gray_300};
    background-color: ${({ theme }) => theme.gray_400};
`;

const baseIconStyles = css`
    margin: 0 0.5rem;

    fill: ${({ theme }) => theme.gray_300};
    cursor: pointer;
`;

const MemeIcon = styled(BsStars)`
    ${baseIconStyles}
`;

const MemeButton = styled.button`
    border: none;

    background-color: transparent;
`;

const MemeGenerateIcon = styled(BsImage)`
    ${baseIconStyles}
`;

const MemeGenerateButton = styled(MemeButton)``;

export {
    InputWrapper,
    Form,
    MessageInput,
    MemeIcon,
    MemeButton,
    MemeGenerateIcon,
    MemeGenerateButton
};
