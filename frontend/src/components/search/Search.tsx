import { FC, InputHTMLAttributes } from "react";
import { SearchIcon, SearchInput, SearchWrapper } from "./Search.styled";

const Search: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <SearchWrapper>
            <SearchInput placeholder="Search" {...props} />
            <SearchIcon />
        </SearchWrapper>
    );
};

export default Search;
