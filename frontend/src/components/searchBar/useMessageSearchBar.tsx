import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

const useMessageSearchBar = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSetSearchParams = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchParams({
            messagesFilter: event.target.value
        });
    };

    return { handleSetSearchParams };
};

export default useMessageSearchBar;
