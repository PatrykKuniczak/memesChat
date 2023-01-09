import {
    KeyboardEvent,
    SetStateAction,
    useEffect,
    useRef,
    useState
} from "react";
import useMessages from "../../hooks/useMessages";
import { useSearchParams } from "react-router-dom";
import useMessagesFilter from "../../hooks/useMessagesFilter";

const HomeLogic = () => {
    const [selected, setSelected] = useState("");
    const [editMode, setEditMode] = useState(false);

    const { messages } = useMessages();
    const [filteredMessages, setFilteredMessages] = useState(messages);

    const chatInput = useRef<HTMLInputElement | null>(null);

    const [currentInputValue, setCurrentInputValue] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchMode, setSearchMode] = useState<"user" | "message">("message");

    useEffect(() => {
        setFilteredMessages(messages);
    }, [messages]);

    // TODO: Add event handlers
    const handleSetSelected = (id: string) => {
        setSelected(id);
    };

    const handleSetEditMode = (editMode: boolean) => {
        setEditMode(editMode);
    };

    const handleSetFilteredMessages = (
        filteredMessages: SetStateAction<
            { id: string; message: string; author: string }[]
        >
    ) => {
        setFilteredMessages(filteredMessages);
    };

    const handleSetCurrentInputValue = (
        currentInputValue: SetStateAction<string>
    ) => {
        setCurrentInputValue(currentInputValue);
    };

    const handleSetSearchParams = (searchParams: {}) => {
        setSearchParams(searchParams);
    };

    const handleSetSearchMode = (
        searchMode: SetStateAction<"user" | "message">
    ) => {
        setSearchMode(searchMode);
    };

    useMessagesFilter({
        messages,
        searchMode,
        searchParams,
        handleSetFilteredMessages
    });

    const handleTextInputEnterPress = (
        event: KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key !== "Enter") {
            return;
        }

        if (editMode) {
            setFilteredMessages((prevState) => {
                return prevState.map((message) => {
                    if (message.id === selected) {
                        return {
                            ...message,
                            message: currentInputValue
                        };
                    }
                    return message;
                });
            });

            chatInput.current!.value = "";
            setEditMode(false);
            return;
        }

        setFilteredMessages((prevState) => {
            return [
                ...prevState,
                { id: "1110", message: currentInputValue, author: "degi_" }
            ];
        });
        chatInput.current!.value = "";
    };

    return {
        messages,
        filteredMessages,
        handleSetFilteredMessages,
        chatInput,
        selected,
        handleSetSelected,
        editMode,
        handleSetEditMode,
        searchMode,
        handleSetSearchMode,
        searchParams,
        handleSetSearchParams,
        handleSetCurrentInputValue,
        handleTextInputEnterPress
    };
};

export default HomeLogic;
