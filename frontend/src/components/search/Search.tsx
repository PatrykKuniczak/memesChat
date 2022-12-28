import React from "react";
import { SearchIcon, SearchInput, SearchWrapper } from "./Search.styled";

const Search = () => {
    return (
        <SearchWrapper>
            <SearchInput placeholder="Search" />
            <SearchIcon />
        </SearchWrapper>
    );
};

export default Search;
