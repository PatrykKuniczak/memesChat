import {
    SetStateAction,
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { deleteMessage, setEditMode } from "store/slices/ChatSlice";
import useMessagesFilter from "hooks/useMessagesFilter";

const useMessagesBox = () => {
    const [selected, setSelected] = useState("");
    const chatInput = useRef<HTMLInputElement | null>(null);

    const messages = useAppSelector((state) => state.chat.messages);
    const searchMode = useAppSelector((state) => state.search.searchMode);
    const dispatch = useAppDispatch();

    const [filteredMessages, setFilteredMessages] = useState(messages);

    useEffect(() => {
        setFilteredMessages(messages);
    }, [messages]);

    const handleSetSelected = (id: string) => {
        setSelected(id);
    };

    const handleSetEditMode = () => {
        dispatch(setEditMode(true));

        chatInput.current!.value =
            messages.find(({ id }) => id === selected)?.message || "";
    };

    const handleDeleteMessage = () => {
        dispatch(deleteMessage(selected));
    };

    const handleSetFilteredMessages = useCallback(
        (
            filteredMessages: SetStateAction<
                { id: string; message: string; author: string }[]
            >
        ) => {
            setFilteredMessages(filteredMessages);
        },
        []
    );

    useMessagesFilter({
        messages,
        searchMode,
        handleSetFilteredMessages
    });

    return {
        filteredMessages,
        selected,
        handleSetSelected,
        handleSetEditMode,
        handleDeleteMessage
    };
};

export default useMessagesBox;
