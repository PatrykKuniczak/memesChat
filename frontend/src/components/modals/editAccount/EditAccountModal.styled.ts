import styled from "styled-components";
import { ModalWrapper } from "../GenericModalComponents.styled";

const EditAccountWrapper = styled(ModalWrapper)`
    gap: 2rem;

    @media (max-width: ${({ theme }) => theme.media_md}) {
        flex-direction: column;
        width: 80vw;
        padding: 4rem 2rem;
    }
`;

const OptionEditAccount = styled.div`
    width: 100%;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.primary};
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    @media (max-width: ${({ theme }) => theme.media_md}) {
        flex-direction: column;
    }
`;

const Error = styled.p`
    margin-top: 1rem;

    color: ${({ theme }) => theme.red};

    text-align: center;
`;

const TextInput = styled.input`
    padding: 0.5rem 1rem;

    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 0.2rem;

    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.gray_semitransparent};

    font-size: ${({ theme }) => theme.font_sm};
    font-weight: ${({ theme }) => theme.font_regular};

    cursor: text;

    @media (max-width: ${({ theme }) => theme.media_md}) {
        width: 100%;
        padding: 1rem;
    }
`;

const OptionEditAvatar = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2rem;

    width: 100%;

    border-bottom: 1px solid ${({ theme }) => theme.primary};

    @media (max-width: ${({ theme }) => theme.media_md}) {
        flex-direction: column;
    }
`;

export {
    EditAccountWrapper,
    OptionEditAccount,
    TextInput,
    OptionEditAvatar,
    InputWrapper,
    Error
};
