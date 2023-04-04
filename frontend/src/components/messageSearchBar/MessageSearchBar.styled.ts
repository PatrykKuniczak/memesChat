import { hintMessage } from "assets/styles/theme";
import styled from "styled-components";

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
`;

const SearchTypeSwitcher = styled.button`
    padding: 1rem;
    margin-right: 1rem;
    width: 8rem;
    min-width: 122px;
    border-radius: 5px;
    outline: transparent;

    background-color: ${({ theme }) => theme.gray_500};
    color: ${({ theme }) => theme.gray_300};

    font-size: ${({ theme }) => theme.font_sm};

    ${hintMessage};

    &::after {
        left: 0;
        top: 115%;

        content: "Wyszukaj wiadomości po treści lub autorze";
    }

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        padding: 0.7rem;
    }
`;

export { SearchContainer, SearchTypeSwitcher };
