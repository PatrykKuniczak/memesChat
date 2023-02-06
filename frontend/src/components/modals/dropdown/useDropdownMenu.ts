import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

const useDropdownMenu = (changeMenuVisible: () => void) => {
	const ref = useRef(null);

	const handleClickOutside = () => {
		changeMenuVisible();
	};

	useOnClickOutside(ref, handleClickOutside);

	return { ref };
};

export default useDropdownMenu;
