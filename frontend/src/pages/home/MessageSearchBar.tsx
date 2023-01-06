import { Dispatch, FC, SetStateAction } from "react";
import { SearchContainer, SearchTypeSwitcher } from "./MessageSearchBar.styled";
import Search from "../../components/search/Search";

interface Props {
    searchMode: string;
    handleSetSearchMode: Dispatch<SetStateAction<"message" | "user">>;
    handleSetSearchParams: (searchParams: {}) => void;
    applyFilter: () => void;
}

const MessageSearchBar: FC<Props> = ({
    searchMode,
    handleSetSearchMode,
    handleSetSearchParams,
    applyFilter
}) => {
    return (
        <SearchContainer>
            <SearchTypeSwitcher
                onClick={() =>
                    handleSetSearchMode((searchMode) =>
                        searchMode === "message" ? "user" : "message"
                    )
                }
            >
                {searchMode}
            </SearchTypeSwitcher>
            <Search
                onChange={(event) => {
                    handleSetSearchParams({
                        messagesFilter: event.target.value
                    });
                    applyFilter();
                }}
            />
        </SearchContainer>
    );
};

export default MessageSearchBar;
