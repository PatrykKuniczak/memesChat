import { useAppDispatch, useAppSelector } from "store/store";
import { useState, ChangeEvent } from "react";
import { editUsername } from "store/slices/UserSlice";

export const useModalEditName = () => {
    const dispatch = useAppDispatch();

    const [newUsername, setNewUsername] = useState(
        useAppSelector((state) => state.user.username)
    );

    const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewUsername(event.target.value);
    };

    const updateUsername = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        dispatch(editUsername(newUsername));
    };

    return {
        newUsername,
        updateUsername,
        handleNicknameChange
    };
};
