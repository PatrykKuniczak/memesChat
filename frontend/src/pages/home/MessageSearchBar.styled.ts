import styled from "styled-components";

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
`;

const SearchTypeSwitcher = styled.button`
    background-color: ${(props) => props.theme.gray_500};
    border: transparent;
    border-radius: 5px;
    outline: transparent;
    padding: 1rem;
    margin-right: 1rem;
    color: ${(props) => props.theme.gray_300};
    font-size: 1rem;
    text-transform: capitalize;
`;

export { SearchContainer, SearchTypeSwitcher };
