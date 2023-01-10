import {
    ChangeEvent,
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

    const { messages, handleSetMessages } = useMessages();
    const [filteredMessages, setFilteredMessages] = useState(messages);

    const chatInput = useRef<HTMLInputElement | null>(null);

    const [currentInputValue, setCurrentInputValue] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchMode, setSearchMode] = useState<"user" | "message">("message");

    useEffect(() => {
        setFilteredMessages(messages);
    }, [messages]);

    const handleSetSelected = (id: string) => {
        setSelected(id);
    };

    const handleSetEditMode = () => {
        setEditMode(true);

        chatInput.current!.value =
            messages.find(({ id }) => id === selected)?.message || "";
    };

    const handleSetFilteredMessages = (
        filteredMessages: SetStateAction<
            { id: string; message: string; author: string }[]
        >
    ) => {
        setFilteredMessages(filteredMessages);
    };

    const handleSetCurrentInputValue = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setCurrentInputValue(event.target.value);
    };

    const handleSetSearchParams = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchParams({
            messagesFilter: event.target.value
        });
    };

    const handleSetSearchMode = () => {
        setSearchMode((searchMode) =>
            searchMode === "message" ? "user" : "message"
        );
    };

    const handleAddMessage = () => {
        const number = Math.floor(Math.random() * 100) + 10;
        handleSetMessages((prevState) => {
            return [
                ...prevState,
                {
                    id: number.toString(),
                    message: currentInputValue,
                    author: "degi_"
                }
            ];
        });
    };

    const handleDeleteMessage = () => {
        handleSetMessages(messages.filter(({ id }) => id !== selected));
    };

    const handleUpdateMessage = () => {
        handleSetMessages((prevState) => {
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
            handleUpdateMessage();

            chatInput.current!.value = "";
            setEditMode(false);
            return;
        }

        handleAddMessage();
        chatInput.current!.value = "";
    };

    return {
        messages,
        handleSetMessages,
        filteredMessages,
        handleSetFilteredMessages,
        chatInput,
        selected,
        handleSetSelected,
        editMode,
        handleSetEditMode,
        searchMode,
        handleSetSearchMode,
        handleDeleteMessage,
        searchParams,
        handleSetSearchParams,
        handleSetCurrentInputValue,
        handleTextInputEnterPress
    };
};

export default HomeLogic;
