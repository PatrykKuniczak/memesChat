import React, { useRef, useState } from "react";
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
    UsersContainer
} from "./Home.styled";
import user from "../../assets/user.jpg";
import { BsPencilSquare, BsTrashFill } from "react-icons/bs";

const Home = () => {
    const [selected, setSelected] = useState("");
    const [editMode, setEditMode] = useState(false);

    const chatInput = useRef<HTMLInputElement | null>(null);

    const [currentInputValue, setCurrentInputValue] = useState("");

    const [messages, setMessages] = useState([
        { id: "1", message: "Lorem ipsumxxxxxxxx xxx xxx xxx" },
        {
            id: "2",
            message:
                "Lorem ipsumxxxxxxxx xxx xxx xxx Lorem ipsumxxxxxxxx xxx xxx xxx Lorem ipsumxxxxxxxx xxx xxx xxx Lorem ipsumxxxxxxxx xxx xxx xxx Lorem ipsumxxxxxxxx xxx xxx xxx"
        },
        {
            id: "3",
            message:
                "Lorem ipsumxxxxxxxx xxx xxx xxx Lorem ipsumxxxxxxxx xxx xxx xxx Lorem ipsumxxxxxxxx xxx xxx xxx Lorem ipsumxxxxxxxx xxx xxx xxx Lorem ipsumxxxxxxxx xxx xxx xxx"
        },
        {
            id: "4",
            message:
                "Lorem ipsumxxxxxxxx xxx xxx xxx Lorem ipsumxxxxxxxx xxx xxx xxx Lorem ipsumxxxxxxxx xxx xxx xxx Lorem ipsumxxxxxxxx xxx xxx xxx Lorem ipsumxxxxxxxx xxx xxx xxx"
        },
        {
            id: "5",
            message:
                "Lorem ipsumxxxxxxxx xxx xxx xxx Lorem ipsumxxxxxxxx xxx xxx xxx Lorem ipsumxxxxxxxx xxx xxx xxx Lorem ipsumxxxxxxxx xxx xxx xxx Lorem ipsumxxxxxxxx xxx xxx xxx"
        },
        {
            id: "6",
            message:
                "Lorem ipsumxxxxxxxx xxx xxx xxx Lorem ipsumxxxxxxxx xxx xxx xxx Lorem ipsumxxxxxxxx xxx xxx xxx Lorem ipsumxxxxxxxx xxx xxx xxx Lorem ipsumxxxxxxxx xxx xxx xxx"
        }
    ]);
    const onTextInputEnterPress = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key !== "Enter") {
            return;
        }

        if (editMode) {
            setMessages((prevState) => {
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

        setMessages((prevState) => {
            return [...prevState, { id: "10", message: currentInputValue }];
        });
        chatInput.current!.value = "";
    };
    const getMessages = () =>
        messages.map(({ id, message }) => (
            <MessageContainer>
                <MessageAuthor src={user} />
                <Message onClick={() => setSelected(id)}>{message}</Message>
                {selected === id && (
                    <MessageSettings>
                        <BsPencilSquare
                            onClick={() => {
                                setEditMode(true);
                                chatInput.current!.value =
                                    messages.find(
                                        (message) => message.id === selected
                                    )?.message || "";
                            }}
                        />
                        <BsTrashFill
                            onClick={() =>
                                setMessages(() =>
                                    messages.filter(({ id }) => id !== selected)
                                )
                            }
                        />
                    </MessageSettings>
                )}
            </MessageContainer>
        ));

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
                    <Search />
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
