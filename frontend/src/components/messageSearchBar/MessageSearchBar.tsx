import { SearchContainer, SearchTypeSwitcher } from "./MessageSearchBar.styled";
import useMessageSearchBar from "./useMessageSearchBar";
import Search from "../search/Search";
import { ChangeEvent } from "react";

interface IChat {
	searchValue: string;
	handleSetSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
	searchMode: "user" | "message";
	handleSetSearchMode: (searchMode: "user" | "message") => void;
}

const MessageSearchBar = ({
	searchValue,
	handleSetSearchValue,
	searchMode,
	handleSetSearchMode
}: IChat) => {
	const { handleSwitchSearchMode } = useMessageSearchBar({
		searchMode,
		handleSetSearchMode
	});

	return (
		<SearchContainer>
			<SearchTypeSwitcher onClick={handleSwitchSearchMode}>
				{searchMode}
			</SearchTypeSwitcher>
			<Search
				onChange={handleSetSearchValue}
				value={searchValue}
				variant="dark"
			/>
		</SearchContainer>
	);
};

export default MessageSearchBar;
