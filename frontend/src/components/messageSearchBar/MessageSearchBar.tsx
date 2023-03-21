import { IUseChat } from "components/chat/useChat";
import { SearchContainer, SearchTypeSwitcher } from "./MessageSearchBar.styled";
import useMessageSearchBar from "./useMessageSearchBar";
import Search from "../search/Search";

const MessageSearchBar = ({
    searchValue,
    handleSetSearchValue,
    searchMode,
    handleSetSearchMode
}: IUseChat) => {
    const { handleSwitchSearchMode } = useMessageSearchBar({
        searchMode,
        handleSetSearchMode
    });

    return (
        <SearchContainer>
            <SearchTypeSwitcher onClick={handleSwitchSearchMode}>
                {searchMode === "message" ? "Wiadomości" : "Użytkownicy"}
            </SearchTypeSwitcher>
            <Search
                onChange={handleSetSearchValue}
                value={searchValue}
                variant="dark"
            />
        </SearchContainer>
    );
};

export default MessageSearchBar;
