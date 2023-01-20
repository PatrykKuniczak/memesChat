import styled from "styled-components";

const EditNameModal = styled.form`
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

export { EditNameModal };
