import { Dispatch, FC, SetStateAction } from "react";
import { SearchTypeSwitcher } from "./Home.styled";
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
        <div>
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
        </div>
    );
};

export default MessageSearchBar;
