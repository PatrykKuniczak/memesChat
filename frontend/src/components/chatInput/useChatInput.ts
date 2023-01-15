import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { addMessage } from "store/slices/ChatSlice";
import { useAppDispatch } from "hooks/reduxHooks";

const useChatInput = () => {
    const chatInput = useRef<HTMLInputElement | null>(null);
    const [currentInputValue, setCurrentInputValue] = useState("");
    const dispatch = useAppDispatch();

    const handleSetCurrentInputValue = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setCurrentInputValue(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (currentInputValue) {
            dispatch(addMessage(currentInputValue));
            setCurrentInputValue("");
            chatInput.current!.value = "";
        }
    };

    return {
        chatInput,
        handleSetCurrentInputValue,
        handleSubmit
    };
};

export default useChatInput;
