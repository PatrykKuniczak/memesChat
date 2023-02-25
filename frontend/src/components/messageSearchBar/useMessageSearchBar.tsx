interface IChat {
	searchMode: "user" | "message";
	handleSetSearchMode: (searchMode: "user" | "message") => void;
}

const useMessageSearchBar = ({ searchMode, handleSetSearchMode }: IChat) => {
	const handleSwitchSearchMode = () => {
		handleSetSearchMode(searchMode === "message" ? "user" : "message");
	};

	return {
		searchMode,
		handleSwitchSearchMode
	};
};

export default useMessageSearchBar;
