import { useState, ChangeEvent, FormEvent } from "react";
import { editUsername } from "store/slices/UserSlice";
import { useAppDispatch, useAppSelector } from "store/store";

const useModalEditUsername = (hideModal: () => void) => {
	const dispatch = useAppDispatch();

	const [newUsername, setNewUsername] = useState(
		useAppSelector(state => state.user.username)
	);

	const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setNewUsername(event.target.value);
	};
	const updateUsername = (event: FormEvent) => {
		event.preventDefault();
		hideModal();

		dispatch(editUsername(newUsername));
	};

	return {
		newUsername,
		updateUsername,
		handleNicknameChange,
		hideModal
	};
};

export default useModalEditUsername;
