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
	return (
		<MainWrapper>
			<Navbar />
			<Main>
				<Aside>
					<Header>
						<Heading>Users</Heading>
						<OnlineBadge>{Math.floor(Math.random() * 100)}</OnlineBadge>
					</Header>
					<Users />
				</Aside>
				<Chat />
			</Main>
		</MainWrapper>
	);
};

export default Home;
