import React from "react";
import { Icon, Input, Wrapper } from "./Search.styled";

const Search = () => {
    return (
        <Wrapper>
            <Input placeholder="Search" />
            <Icon />
        </Wrapper>
    );
};

export default Search;
