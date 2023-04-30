import axios from "axios";
import useToken from "hooks/useToken";
import { useLayoutEffect } from "react";
import {
    MainWrapper,
    Main,
    Aside,
    Header,
    Heading,
    OnlineBadge
} from "./Home.styled";
import Navbar from "components/navbar/Navbar";
import Users from "components/users/Users";
import Chat from "components/chat/Chat";

const Home = () => {
    const { userToken } = useToken();

    useLayoutEffect(() => {
        if (userToken)
            axios.defaults.headers.common.Authorization = "Bearer " + userToken;
    }, [userToken]);

    return (
        <MainWrapper>
            <Navbar />
            <Main>
                <Aside>
                    <Header>
                        <Heading>Aktywni</Heading>
                        <OnlineBadge>
                            {Math.floor(Math.random() * 100)}
                        </OnlineBadge>
                    </Header>
                    <Users />
                </Aside>
                <Chat />
            </Main>
        </MainWrapper>
    );
};

export default Home;
