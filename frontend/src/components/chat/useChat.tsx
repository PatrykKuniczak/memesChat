import { ChangeEvent, useState } from "react";

export type TSearchMode = "user" | "message";

export interface IUseChat {
	searchValue: string;
	handleSetSearchValue: (event: ChangeEvent<HTMLInputElement>) => void;
	searchMode: TSearchMode;
	handleSetSearchMode: (searchMode: TSearchMode) => void;
}

const useChat = () => {
	const [searchValue, setSearchValue] = useState("");
	const [searchMode, setSearchMode] = useState<TSearchMode>("message");

	const handleSetSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	const handleSetSearchMode = (searchMode: TSearchMode) => {
		setSearchMode(searchMode);
	};

	return { searchValue, handleSetSearchValue, searchMode, handleSetSearchMode };
};

export default useChat;
