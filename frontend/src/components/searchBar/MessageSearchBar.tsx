import { FC } from "react";
import { SearchContainer, SearchTypeSwitcher } from "./MessageSearchBar.styled";
import Search from "components/search/Search";
import useMessageSearchBar from "./useMessageSearchBar";

interface Props {
    searchMode: string;
    handleSetSearchMode: () => void;
}

const MessageSearchBar: FC<Props> = ({ searchMode, handleSetSearchMode }) => {
    const { handleSetSearchParams } = useMessageSearchBar();

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
