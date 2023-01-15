import styled from "styled-components";
import { BsImage, BsStars } from "react-icons/bs";

const InputWrapper = styled.header`
    display: flex;
    align-items: center;
    margin: 2rem;
    padding: 0.5rem;
    border-radius: 5px;

    background-color: ${(props) => props.theme.gray_400};
    border: 1px solid #fff;
`;

const MessageInput = styled.input`
    padding: 1rem;
    width: 100%;
    outline: transparent;
    border: transparent;

    color: ${(props) => props.theme.gray_300};
    background-color: ${(props) => props.theme.gray_400};
`;

const MemeIcon = styled(BsStars)`
    margin: 0 0.5rem;

    fill: ${(props) => props.theme.gray_300};
    cursor: pointer;
`;

const MemeButton = styled.button`
    border: none;

    background-color: transparent;
`;

const MemeGenerateIcon = styled(BsImage)`
    margin: 0 0.5rem;

    fill: ${(props) => props.theme.gray_300};
    cursor: pointer;
`;

const MemeGenerateButton = styled.button`
    border: none;

    background-color: transparent;
`;

export {
    InputWrapper,
    MessageInput,
    MemeIcon,
    MemeButton,
    MemeGenerateIcon,
    MemeGenerateButton
};
