import styled from "styled-components";

const SignupContainer = styled.div`
    display: grid;
    place-content: center;
    grid-template-columns: min(40rem, 50%);
    height: 100vh;
`;

const Heading = styled.h1`
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.font_xxl};
    text-align: center;
`;

export { SignupContainer, Heading };
