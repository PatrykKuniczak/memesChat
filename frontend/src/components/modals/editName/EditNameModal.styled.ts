import styled from "styled-components";

const EditNameWrapper = styled.form`
    position: absolute;
    z-index: 2;
    top: 30vh;
    left: 50vw;
    transform: translate(-50%, -50%);

    display: flex;
    gap: 1rem;
    align-items: center;

    padding: 3rem 4rem;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 0.5rem;

    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.gray_500};

    font-size: ${({ theme }) => theme.font_md};
    font-weight: ${({ theme }) => theme.font_regular};

    @media (max-width: ${({ theme }) => theme.media_md}) {
        flex-direction: column;
        width: 80vw;
        padding: 4rem 2rem;
    }
`;

const TextInput = styled.input`
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 0.2rem;

    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.gray_semitransparent};

    font-size: ${({ theme }) => theme.font_sm};
    font-weight: ${({ theme }) => theme.font_regular};

    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.media_md}) {
        width: 100%;
        padding: 1rem;
    }
`;

export { EditNameWrapper, TextInput };
