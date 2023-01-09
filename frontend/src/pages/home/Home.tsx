import Navbar from "components/navbar/Navbar";
import Search from "components/search/Search";
import {
    Main,
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
    UsersContainer
} from "./Home.styled";
import user from "assets/user.jpg";
import MessagesBox from "./MessagesBox";
import MessageSearchBar from "./MessageSearchBar";
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
        handleSetSearchParams,
        handleSetCurrentInputValue,
        handleTextInputEnterPress
    } = HomeLogic();

    return (
        <>
            <Navbar />
            <Main>
                <aside>
                    <Header>
                        <Heading>Users</Heading>
                        <OnlineBadge>
                            {Math.floor(Math.random() * 100)}
                        </OnlineBadge>
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
                <>
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
                                chatInput={chatInput}
                                handleSetEditMode={handleSetEditMode}
                                handleSetFilteredMessages={
                                    handleSetFilteredMessages
                                }
                                handleSetSelected={handleSetSelected}
                                messages={messages}
                                selected={selected}
                            />
                        </MessagesWrapper>
                        <InputWrapper>
                            <MessageInput
                                ref={chatInput}
                                onKeyDown={handleTextInputEnterPress}
                                onChange={(event) =>
                                    handleSetCurrentInputValue(
                                        () => event.target.value
                                    )
                                }
                            />
                            <MemeIcon />
                            <MemeGenerateIcon />
                        </InputWrapper>
                    </Chat>
                </>
            </Main>
        </>
    );
};

export default Home;
