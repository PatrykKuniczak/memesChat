import React from "react";
import Search from "../../components/search/Search";
import {
    Container,
    Header,
    Heading,
    Label,
    OnlineBadge,
    User,
    UserImage,
    UserName,
    UsersContainer
} from "./Home.styled";
import user from "../../assets/user.jpg";

const Home = () => {
    return (
        <Container>
            <aside>
                <Header>
                    <Heading>Users</Heading>
                    <OnlineBadge>21</OnlineBadge>
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
            <main></main>
        </Container>
    );
};

export default Home;