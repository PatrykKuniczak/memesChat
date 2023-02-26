import { IUseChat } from "components/chat/useChat";

interface IUseMessagesSearchBar
	extends Pick<IUseChat, "searchMode" | "handleSetSearchMode"> {}

const useMessageSearchBar = ({
	searchMode,
	handleSetSearchMode
}: IUseMessagesSearchBar) => {
	const handleSwitchSearchMode = () => {
		handleSetSearchMode(searchMode === "message" ? "user" : "message");
	};

	return {
		searchMode,
		handleSwitchSearchMode
	};
};

export default useMessageSearchBar;
