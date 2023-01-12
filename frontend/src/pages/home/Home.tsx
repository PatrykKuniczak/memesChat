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
    MemeIcon,
    MemeGenerateIcon,
    MessageInput,
    MessagesWrapper,
    InputWrapper,
    OnlineBadge,
    User,
    UserImage,
    UserName,
    UsersContainer,
    UserList,
    MemeButton,
    MemeGenerateButton
} from "./Home.styled";
import user from "assets/user.jpg";
import MessagesBox from "components/messages/MessagesBox";
import MessageSearchBar from "components/searchBar/MessageSearchBar";
import HomeLogic from "./HomeLogic";

const Home = () => {
    const {
        messages,
        filteredMessages,
        handleSetFilteredMessages,
        chatInput,
        selected,
        handleSetSelected,
        handleSetEditMode,
        searchMode,
        handleSetSearchMode,
        handleDeleteMessage,
        handleSetSearchParams,
        handleSetCurrentInputValue,
        handleTextInputEnterPress
    } = HomeLogic();

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
                        <MessageSearchBar
                            searchMode={searchMode}
                            handleSetSearchMode={handleSetSearchMode}
                            handleSetSearchParams={handleSetSearchParams}
                        />
                    </ChatHeader>
                    <MessagesWrapper>
                        <MessagesBox
                            filteredMessages={filteredMessages}
                            handleSetEditMode={handleSetEditMode}
                            handleSetFilteredMessages={
                                handleSetFilteredMessages
                            }
                            handleSetSelected={handleSetSelected}
                            messages={messages}
                            handleDeleteMessage={handleDeleteMessage}
                            selected={selected}
                        />
                    </MessagesWrapper>
                    <InputWrapper>
                        <MessageInput
                            ref={chatInput}
                            onKeyDown={handleTextInputEnterPress}
                            onChange={handleSetCurrentInputValue}
                        />
                        <MemeButton>
                            <MemeIcon />
                        </MemeButton>
                        <MemeGenerateButton>
                            <MemeGenerateIcon />
                        </MemeGenerateButton>
                    </InputWrapper>
                </Chat>
            </Main>
        </Root>
    );
};

export default Home;
