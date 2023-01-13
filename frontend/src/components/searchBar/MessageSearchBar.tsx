import { ChangeEvent, FC } from "react";
import { SearchContainer, SearchTypeSwitcher } from "./MessageSearchBar.styled";
import Search from "components/search/Search";

interface Props {
    searchMode: string;
    handleSetSearchMode: () => void;
    handleSetSearchParams: (event: ChangeEvent<HTMLInputElement>) => void;
}

const MessageSearchBar: FC<Props> = ({
    searchMode,
    handleSetSearchMode,
    handleSetSearchParams
}) => {
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
