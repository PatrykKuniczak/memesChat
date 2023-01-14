import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { addMessage, updateMessage, setEditMode } from "store/slices/ChatSlice";

const useChatInput = () => {
    const chatInput = useRef<HTMLInputElement | null>(null);
    const [currentInputValue, setCurrentInputValue] = useState("");
    const editMode = useAppSelector((state) => state.chat.editMode);
    const dispatch = useAppDispatch();

    const handleSetCurrentInputValue = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setCurrentInputValue(event.target.value);
    };

    const handleTextInputEnterPress = (
        event: KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key !== "Enter") {
            return;
        }

        if (editMode) {
            dispatch(
                updateMessage({
                    selected: "",
                    message: currentInputValue
                })
            );

            chatInput.current!.value = "";
            dispatch(setEditMode(false));
            return;
        }

        dispatch(addMessage(currentInputValue));
        chatInput.current!.value = "";
    };

    return {
        chatInput,
        handleSetCurrentInputValue,
        handleTextInputEnterPress
    };
};

export default useChatInput;
