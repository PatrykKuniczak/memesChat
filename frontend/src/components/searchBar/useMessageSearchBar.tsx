import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useMessageSearchBar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchMode, setSearchMode] = useState(
        searchParams.get("searchMode") || "message"
    );

    const handleSetSearchParams = (event: ChangeEvent<HTMLInputElement>) => {
        searchParams.set("messagesFilter", event.target.value);
        setSearchParams(searchParams);
    };

    const handleSetSearchMode = () => {
        const newSearchMode = searchMode === "message" ? "user" : "message";
        setSearchMode(newSearchMode);

        searchParams.set("searchMode", newSearchMode);
        setSearchParams(searchParams);
    };

    return { handleSetSearchParams, searchMode, handleSetSearchMode };
};

export default useMessageSearchBar;
