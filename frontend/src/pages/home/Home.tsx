import { KeyboardEvent, useEffect, useRef, useState } from "react";
import Search from "../../components/search/Search";
import {
    Container,
    Header,
    Heading,
    Label,
    Main,
    MainHeader,
    MemeIcon,
    MessageInput,
    MessagesWrapper,
    InputWrapper,
    OnlineBadge,
    User,
    UserImage,
    UserName,
    UsersContainer
} from "./Home.styled";
import user from "../../assets/user.jpg";
import { useSearchParams } from "react-router-dom";
import useMessages from "../../hooks/useMessages";
import MessagesBox from "./MessagesBox";
import MessageSearchBar from "./MessageSearchBar";
import useMessagesFilter from "../../hooks/useMessagesFilter";

const Home = () => {
    const [selected, setSelected] = useState("");
    const [editMode, setEditMode] = useState(false);

    const { messages } = useMessages();
    const [filteredMessages, setFilteredMessages] = useState(messages);

    const chatInput = useRef<HTMLInputElement | null>(null);

    const [currentInputValue, setCurrentInputValue] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchMode, setSearchMode] = useState<"user" | "message">("message");

    // TODO: Add event handlers

    useEffect(() => {
        setFilteredMessages(messages);
    }, [messages]);

    const { applyFilter } = useMessagesFilter({
        messages,
        searchMode,
        searchParams,
        setFilteredMessages
    });

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
                    <MessageSearchBar
                        searchMode={searchMode}
                        handleSetSearchMode={setSearchMode}
                        handleSetSearchParams={setSearchParams}
                        applyFilter={applyFilter}
                    />
                </MainHeader>
                <MessagesWrapper>
                    <MessagesBox
                        filteredMessages={filteredMessages}
                        chatInput={chatInput}
                        handleSetEditMode={setEditMode}
                        handleSetFilteredMessages={setFilteredMessages}
                        handleSetSelected={setSelected}
                        messages={messages}
                        selected={selected}
                    />
                </MessagesWrapper>
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
