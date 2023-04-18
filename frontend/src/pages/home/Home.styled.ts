import styled from "styled-components";

const MainWrapper = styled.div`
    height: 100vh;
`;

const Main = styled.div`
    display: grid;
    grid-template-rows: 1fr 4fr;

    gap: 1.5rem;
    height: 100%;

    padding: 1rem;

    @media (min-width: ${({ theme }) => theme.media_md}) {
        grid-template-rows: auto;
        grid-template-columns: 1fr 2fr;

        padding: 5rem 2.5rem 1rem;
    }

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        padding: 0.5rem;
    }
`;

const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    max-height: 400px;

    @media (min-width: ${({ theme }) => theme.media_md}) {
        max-height: calc(100vh - 6rem);
        min-width: 400px;
    }
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        padding: 0.3rem;
    }
`;

const Heading = styled.h1`
    color: ${({ theme }) => theme.white};

    font-size: ${({ theme }) => theme.font_xl};
    font-weight: ${({ theme }) => theme.font_black};

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        font-size: ${({ theme }) => theme.font_lg};
        font-weight: ${({ theme }) => theme.font_medium};
    }
`;

const OnlineBadge = styled.div`
    border-radius: 5px;
    padding: 0.5rem 1.5rem;

    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        padding: 0.2rem 1rem;

        font-size: ${({ theme }) => theme.font_sm};
    }
`;

export { MainWrapper, Aside, Main, Header, Heading, OnlineBadge };
