import styled from "styled-components";

const EditAccountWrapper = styled.form`
    position: absolute;
    z-index: 2;
    top: 30vh;
    left: 50vw;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    padding: 2rem 4rem;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 0.5rem;

    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.gray_500};

    font-size: ${({ theme }) => theme.font_sm};
    font-weight: ${({ theme }) => theme.font_regular};

    @media (max-width: ${({ theme }) => theme.media_md}) {
        flex-direction: column;
        width: 80vw;
        padding: 4rem 2rem;
    }
`;

const OptionSeparator = styled.div`
    height: 2px;
    width: 100%;

    background-color: ${({ theme }) => theme.gray_200};
`;

const OptionEditAccount = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const TextInput = styled.input`
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    // width: 100px;

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

    width: 100%;
`;

export {
    EditAccountWrapper,
    OptionSeparator,
    OptionEditAccount,
    TextInput,
    OptionEditAvatar
};
