import { ChangeEvent, useState } from "react";

const useChat = () => {
	const [searchValue, setSearchValue] = useState("");
	const [searchMode, setSearchMode] = useState<"user" | "message">("message");

	const handleSetSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};
	const handleSetSearchMode = (searchMode: "user" | "message") => {
		setSearchMode(searchMode);
	};

	return { searchValue, handleSetSearchValue, searchMode, handleSetSearchMode };
};

export default useChat;
