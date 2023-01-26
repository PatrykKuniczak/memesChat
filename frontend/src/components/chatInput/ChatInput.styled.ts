import styled, { css } from "styled-components";
import { BsImage, BsStars } from "react-icons/bs";

const InputWrapper = styled.header`
    display: flex;
    align-items: center;

    margin: 2rem;
    padding: 0.5rem 1rem 0.5rem;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.gray_400};

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        margin: 0;
    }
`;

const Form = styled.form`
    width: 100%;
`;

const MessageInput = styled.input`
    padding: 1rem;
    width: 100%;
    outline: transparent;
    border: transparent;

    font-size: ${({ theme }) => theme.font_md};

    color: ${({ theme }) => theme.gray_300};
    background-color: ${({ theme }) => theme.gray_400};


    @media (max-width: ${({ theme }) => theme.media_sm}) {
        padding: .5rem;
    }
`;

const baseIconStyles = css`
    margin: 0 0 0 1rem;
    width: 26px;
    height: 26px;

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
