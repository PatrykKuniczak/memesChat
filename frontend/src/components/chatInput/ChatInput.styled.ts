import styled from "styled-components";
import { BsImage } from "react-icons/bs";
import { hintMessage } from "assets/styles/theme";

const InputWrapper = styled.div`
    display: flex;
    align-items: center;

    gap: 0.5rem;
    height: 50px;
    margin: 1rem;
    padding: 1rem 0.5rem;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.gray_400};

    @media (width <=${({ theme }) => theme.media_md}) {
        height: 40px;
    }
`;

const Form = styled.form`
    width: 100%;
`;

const MessageInput = styled.input`
    width: 100%;
    border: none;
    outline: transparent;

    color: ${({ theme }) => theme.gray_300};
    background-color: ${({ theme }) => theme.gray_400};

    font-size: ${({ theme }) => theme.font_md};
`;

const MemeButton = styled.button`
    background-color: transparent;

    ${hintMessage};

    &::after {
        bottom: 115%;
        right: 0;

        content: "Wygeneruj gifa";
    }
`;

const MemeGenerateIcon = styled(BsImage)`
    width: 26px;
    height: 26px;
    fill: ${({ theme }) => theme.gray_300};

    @media (width <=${({ theme }) => theme.media_md}) {
        width: 20px;
        height: 20px;
    }
`;

export const Counter = styled.p<{ isError: boolean }>`
    min-width: 4rem;

    color: ${({ theme, isError }) => (isError ? theme.red : theme.white)};

    text-align: center;
`;

export { InputWrapper, Form, MessageInput, MemeButton, MemeGenerateIcon };
