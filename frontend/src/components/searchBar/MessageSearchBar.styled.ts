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
    border: transparent;
    border-radius: 5px;
    outline: transparent;

    background-color: ${({ theme }) => theme.gray_500};
    color: ${({ theme }) => theme.gray_300};

    font-size: ${({ theme }) => theme.font_sm};
    text-transform: capitalize;

    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        padding: .7rem;
    }
`;

export { SearchContainer, SearchTypeSwitcher };
