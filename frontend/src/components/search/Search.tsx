import { FC, InputHTMLAttributes } from "react";
import { SearchIcon, SearchInput, SearchWrapper } from "./Search.styled";

type ColorVariant = { variant?: "dark" };

const Search: FC<InputHTMLAttributes<HTMLInputElement> & ColorVariant> = (
    props
) => {
    return (
        <SearchWrapper $variant={props.variant || ""}>
            <SearchInput placeholder="Search" {...props} />
            <SearchIcon />
        </SearchWrapper>
    );
};

export default Search;
