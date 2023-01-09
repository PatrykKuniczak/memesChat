import { Dispatch, FC, SetStateAction } from "react";
import { SearchContainer, SearchTypeSwitcher } from "./MessageSearchBar.styled";
import Search from "components/search/Search";

interface Props {
    searchMode: string;
    handleSetSearchMode: Dispatch<SetStateAction<"message" | "user">>;
    handleSetSearchParams: (searchParams: {}) => void;
}

const MessageSearchBar: FC<Props> = ({
    searchMode,
    handleSetSearchMode,
    handleSetSearchParams
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
                }}
            />
        </SearchContainer>
    );
};

export default MessageSearchBar;
