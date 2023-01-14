import { FC } from "react";
import { SearchContainer, SearchTypeSwitcher } from "./MessageSearchBar.styled";
import Search from "components/search/Search";
import useMessageSearchBar from "./useMessageSearchBar";

const MessageSearchBar: FC = () => {
    const { handleSetSearchParams, searchMode, handleSetSearchMode } =
        useMessageSearchBar();

    return (
        <SearchContainer>
            <SearchTypeSwitcher onClick={handleSetSearchMode}>
                {searchMode}
            </SearchTypeSwitcher>
            <Search onChange={handleSetSearchParams} variant="dark" />
        </SearchContainer>
    );
};

export default MessageSearchBar;
