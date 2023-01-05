import {
    KeyboardEvent,
    useEffect,
    useRef,
    useState,
    useTransition
} from "react";
import Search from "../../components/search/Search";
import {
    Container,
    Header,
    Heading,
    Label,
    Main,
    MainHeader,
    MemeIcon,
    Message,
    MessageAuthor,
    MessageInput,
    MessagesWrapper,
    MessageSettings,
    MessageContainer,
    InputWrapper,
    OnlineBadge,
    User,
    UserImage,
    UserName,
    UsersContainer,
    SearchTypeSwitcher
} from "./Home.styled";
import user from "../../assets/user.jpg";
import { useSearchParams } from "react-router-dom";
import useMessages from "./useMessages";

const Home = () => {
    const [selected, setSelected] = useState("");
    const [editMode, setEditMode] = useState(false);

    const { messages } = useMessages();
    const [filteredMessages, setFilteredMessages] = useState(messages);

    const chatInput = useRef<HTMLInputElement | null>(null);

    const [currentInputValue, setCurrentInputValue] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();

    const [isPending, startTransition] = useTransition();

    const [searchMode, setSearchMode] = useState<"user" | "message">("message");

    const filter = () => {
        return messages.filter(({ message, author }) => {
            let filter = searchParams.get("messagesFilter") || "";
            if (filter === "") {
                return true;
            }

            if (searchMode === "user") {
                return author.toLowerCase().startsWith(filter.toLowerCase());
            }

            return (
                message
                    .toLowerCase()
                    .split(" ")
                    .find((piece) =>
                        filter.toLowerCase().split(" ").includes(piece)
                    ) !== undefined
            );
        });
    };
    useEffect(() => {
        setFilteredMessages(filter);
        chatInput.current!.value = searchParams.get("messagesFilter") || "";
    }, [searchParams]);

    useEffect(() => {
        setFilteredMessages(messages);
    }, [messages]);

    const onTextInputEnterPress = (event: KeyboardEvent<HTMLInputElement>) => {
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
                { id: "10", message: currentInputValue, author: "degi_" }
            ];
        });
        chatInput.current!.value = "";
    };

    const handleChange = () => {
        startTransition(() => {
            setFilteredMessages(filter);
        });
    };

    return (
        <Container>
            <aside>
                <Header>
                    <Heading>Users</Heading>
                    <OnlineBadge>{Math.floor(Math.random() * 100)}</OnlineBadge>
                </Header>
                <UsersContainer>
                    <Search />
                    <Label>Online</Label>
                    <div>
                        <User>
                            <UserImage src={user} />
                            <UserName>John Doe</UserName>
                        </User>
                        <User>
                            <UserImage src={user} />
                            <UserName>John Doe</UserName>
                        </User>
                        <User>
                            <UserImage src={user} />
                            <UserName>John Doe</UserName>
                        </User>
                        <User>
                            <UserImage src={user} />
                            <UserName>John Doe</UserName>
                        </User>
                    </div>
                </UsersContainer>
            </aside>
            <Main>
                <MainHeader>
                    <SearchTypeSwitcher
                        onClick={() =>
                            setSearchMode(
                                searchMode === "message" ? "user" : "message"
                            )
                        }
                    >
                        {searchMode}
                    </SearchTypeSwitcher>
                    <Search
                        onChange={(event) => {
                            setSearchParams({
                                messagesFilter: event.target.value
                            });
                            handleChange();
                        }}
                    />
                </MainHeader>
                <MessagesWrapper>{getMessages()}</MessagesWrapper>
                <InputWrapper>
                    <MessageInput
                        ref={chatInput}
                        onKeyDown={onTextInputEnterPress}
                        onChange={(event) =>
                            setCurrentInputValue(() => event.target.value)
                        }
                    />
                    <MemeIcon />
                </InputWrapper>
            </Main>
        </Container>
    );
};

export default Home;
