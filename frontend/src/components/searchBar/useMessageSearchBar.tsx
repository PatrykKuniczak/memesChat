import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

const useMessageSearchBar = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchMode = searchParams.get("searchMode") || "message";

    const messagesFilter = searchParams.get("messagesFilter") || "";

    const handleSetSearchParams = (event: ChangeEvent<HTMLInputElement>) => {
        searchParams.set("messagesFilter", event.target.value);
        setSearchParams(searchParams);
    };

    const handleSetSearchMode = () => {
        searchParams.set(
            "searchMode",
            searchMode === "message" ? "user" : "message"
        );
        setSearchParams(searchParams);
    };

    return {
        handleSetSearchParams,
        searchMode,
        handleSetSearchMode,
        messagesFilter
    };
};

export default useMessageSearchBar;
