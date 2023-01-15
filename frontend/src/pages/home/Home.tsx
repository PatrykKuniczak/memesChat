import Navbar from "components/navbar/Navbar";
import Search from "components/search/Search";
import {
    Root,
    Main,
    Aside,
    Header,
    Heading,
    Label,
    Chat,
    ChatHeader,
    OnlineBadge,
    User,
    UserImage,
    UserName,
    UsersContainer,
    UserList
} from "./Home.styled";
import user from "assets/user.jpg";
import MessagesBox from "components/messages/MessagesBox";
import MessageSearchBar from "components/searchBar/MessageSearchBar";
import ChatInput from "components/chatInput/ChatInput";

const Home = () => {
    return (
        <Root>
            <Navbar />
            <Main>
                <Aside>
                    <Header>
                        <Heading>Users</Heading>
                        <OnlineBadge>
                            {Math.floor(Math.random() * 100)}
                        </OnlineBadge>
                    </Header>
                    <UsersContainer>
                        <Search />
                        <Label>Online</Label>
                        <UserList>
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
                            <User>
                                <UserImage src={user} />
                                <UserName>John Doe</UserName>
                            </User>
                            <User>
                                <UserImage src={user} />
                                <UserName>John Doe</UserName>
                            </User>
                        </UserList>
                    </UsersContainer>
                </Aside>
                <Chat>
                    <ChatHeader>
                        <MessageSearchBar />
                    </ChatHeader>
                    <MessagesBox />
                    <ChatInput />
                </Chat>
            </Main>
        </Root>
    );
};

export default Home;
