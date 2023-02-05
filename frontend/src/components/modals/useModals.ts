import { useState, useEffect } from "react";

const useModals = (changeMenuVisible: () => void) => {
	const [currentModal, setCurrentModal] = useState("");

	const hideModal = () => {
		setCurrentModal("");
	};

	const showModal = (modalName: string) => {
		setCurrentModal(modalName);
		changeMenuVisible();
	};

	useEffect(() => {
		const keyDownHandler = (event: KeyboardEvent) => {
			if (event.key === "Escape") hideModal();
		};

		if (currentModal) document.addEventListener("keydown", keyDownHandler);

		return () => document.removeEventListener("keydown", keyDownHandler);
	}, [currentModal]);

	return { currentModal, hideModal, showModal };
};

export default useModals;