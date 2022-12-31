import React, { useState } from "react";
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
import {
    BsPencilSquare,
    BsTrashFill
} from "react-icons/bs";

const Home = () => {
    const [selected, setSelected] = useState("");

    const messages = [
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
    ];

    const getMessages = () =>
        messages.map(({ id, message }) => (
            <MessageContainer>
                <MessageAuthor src={user} />
                <Message onClick={() => setSelected(id)}>{message}</Message>
                {selected === id && (
                    <MessageSettings>
                        <BsPencilSquare />
                        <BsTrashFill />
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
                    <MessageInput />
                    <MemeIcon />
                </InputWrapper>
            </Main>
        </Container>
    );
};

export default Home;
