import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { InputHTMLAttributes } from "react";

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    border-radius: 5px;
    padding: 1rem;

    background-color: ${(props) => props.theme.gray_500};
`;

const SearchInput = styled.input.attrs<InputHTMLAttributes<HTMLInputElement>>(
    () => ({
        type: "search"
    })
)`
    border: transparent;
    outline: transparent;

    background-color: ${(props) => props.theme.gray_500};
    color: ${(props) => props.theme.gray_300};

    font-size: 1rem;
`;

const SearchIcon = styled(BsSearch)`
    color: ${(props) => props.theme.gray_300};
`;

export { SearchWrapper, SearchInput, SearchIcon };
