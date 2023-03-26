import styled from "styled-components";

const SignupContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: grid;
    place-content: center;
    grid-template-columns: min(40rem, 50%);
    height: auto;
    width: 70vw;
    padding: 3rem 0;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.gray_semitransparent};

    @media (max-width: ${({ theme }) => theme.media_md}) {
        width: 90vw;
    }

    @media (max-height: ${({ theme }) => theme.media_sm}) {
        padding: 1.5rem 0;
    }
`;

const Heading = styled.h1`
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.font_xxl};
    text-align: center;

    @media (max-height: ${({ theme }) => theme.media_sm}) {
        font-size: ${({ theme }) => theme.font_xl};
    }
`;

export { SignupContainer, Heading };
