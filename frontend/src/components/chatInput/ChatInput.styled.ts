import styled from "styled-components";
import { BsImage } from "react-icons/bs";
import { hintMessage } from "assets/styles/theme";

const InputWrapper = styled.div`
    display: flex;
    align-items: center;

    margin: 2rem;
    padding: 0.5rem 1rem 0.5rem;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.gray_400};

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        margin: 0.5rem 0 0 0;
    }
`;

const Form = styled.form`
    width: 100%;
`;

const MessageInput = styled.input`
    width: 100%;
    padding: 1rem;

    border: none;
    outline: transparent;

    color: ${({ theme }) => theme.gray_300};
    background-color: ${({ theme }) => theme.gray_400};

    font-size: ${({ theme }) => theme.font_md};

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        padding: 0.5rem;
    }
`;

const MemeButton = styled.button<{ gifWidgetVisible: boolean }>`
    background-color: transparent;

    pointer-events: ${props => (props.gifWidgetVisible ? "none" : "auto")};

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
`;

export const Counter = styled.p<{ isError: boolean }>`
    min-width: 75px;

    color: ${({ theme, isError }) => (isError ? theme.red : theme.white)};
`;

export { InputWrapper, Form, MessageInput, MemeButton, MemeGenerateIcon };
