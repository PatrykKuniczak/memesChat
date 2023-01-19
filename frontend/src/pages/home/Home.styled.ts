import styled from "styled-components";

const MainWrapper = styled.div`
    height: 100vh;
`;

const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill);
    gap: 1.5rem;
    padding: 1rem;

    @media (min-width: 800px) {
        grid-template-columns: 1fr 2fr;

        padding: 5rem 2.5rem 1rem;
    }
`;

const Aside = styled.aside`
    max-height: calc(100vh - 6rem);

    @media (max-width: 800px) {
        max-height: 400px;
    }
`;

const Header = styled.header`
    display: flex;
    align-items: center;

    gap: 1rem;
`;

const Heading = styled.h1`
    color: ${({ theme }) => theme.white};

    font-size: 1.5rem;
    font-weight: 700;
`;

const OnlineBadge = styled.div`
    border-radius: 5px;
    padding: 0.5rem 1.5rem;

    background-color: ${({ theme }) => theme.primary};
    color: #fff;
`;

export { MainWrapper, Aside, Main, Header, Heading, OnlineBadge };
