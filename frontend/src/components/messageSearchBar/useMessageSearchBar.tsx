import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

const useMessageSearchBar = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const searchMode = searchParams.get("searchMode") || "message";

	const messagesFilter = searchParams.get("messagesFilter") || "";

	const updateSearchParams = (params: { [key: string]: string }) => {
		const allParams: Record<string, string> = Object.fromEntries(searchParams);
		setSearchParams({ ...allParams, ...params });
	};

	const handleSetSearchParams = (event: ChangeEvent<HTMLInputElement>) => {
		updateSearchParams({ messagesFilter: event.target.value });
	};

	const handleSetSearchMode = () => {
		updateSearchParams({
			searchMode: searchMode === "message" ? "user" : "message"
		});
	};

	return {
		handleSetSearchParams,
		searchMode,
		handleSetSearchMode,
		messagesFilter
	};
};

export default useMessageSearchBar;
