import { SearchContainer, SearchTypeSwitcher } from "./MessageSearchBar.styled";
import useMessageSearchBar from "./useMessageSearchBar";
import Search from "../search/Search";

const MessageSearchBar = () => {
	const {
		handleSetSearchParams,
		searchMode,
		handleSetSearchMode,
		messagesFilter
	} = useMessageSearchBar();

	return (
		<SearchContainer>
			<SearchTypeSwitcher onClick={handleSetSearchMode}>
				{searchMode}
			</SearchTypeSwitcher>
			<Search
				onChange={handleSetSearchParams}
				value={messagesFilter}
				variant="dark"
			/>
		</SearchContainer>
	);
};

export default MessageSearchBar;
