import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { toggleSearchMode } from "../../store/slices/SearchSlice";

const useMessageSearchBar = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchMode = useAppSelector((state) => state.search.searchMode);
    const dispatch = useAppDispatch();

    const handleSetSearchParams = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchParams({
            messagesFilter: event.target.value
        });
    };

    const handleSetSearchMode = () => {
        dispatch(toggleSearchMode());
    };

    return { handleSetSearchParams, searchMode, handleSetSearchMode };
};

export default useMessageSearchBar;
