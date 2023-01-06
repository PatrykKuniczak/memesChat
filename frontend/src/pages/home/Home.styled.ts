import styled from "styled-components";
import { BsStars } from "react-icons/bs";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill);
    gap: 1.5rem;
    padding: 2.5rem;

    @media (min-width: 50em) {
        grid-template-columns: min(30%, 300px) minmax(0, 1fr);
        min-height: 100vh;
    }
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Heading = styled.h1`
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
`;

const OnlineBadge = styled.div`
    padding: 0.5rem 1.5rem;
    background-color: ${(props) => props.theme.primary};
    color: #fff;
    border-radius: 5px;
`;

const UsersContainer = styled.section`
    margin-top: 1.5rem;
`;

const Label = styled.p`
    color: ${(props) => props.theme.gray_300};
    margin-top: 1rem;
`;

const User = styled.div`
    display: flex;
    align-items: center;
    padding: 1.5rem;
    gap: 1rem;

    &:nth-child(odd) {
        background-color: ${(props) => props.theme.gray_500};
    }
`;

const UserImage = styled.img`
    object-fit: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const UserName = styled.p`
    color: #fff;
    font-weight: 500;
    font-size: 1.25rem;
`;

const Main = styled.main`
    border-radius: 5px;
    background-color: ${(props) => props.theme.gray_500};
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
`;

const MainHeader = styled.header`
    display: flex;
    justify-content: end;
    border-radius: 5px;
    background-color: ${(props) => props.theme.gray_400};
    padding: 1rem;
`;

const MessagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    flex: 1;
    overflow-y: auto;
    min-height: 400px;
    max-height: 100vh;
`;

const InputWrapper = styled.header`
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: ${(props) => props.theme.gray_400};
    padding: 0.5rem;
    border: 1px solid #fff;
    margin: 3rem;
`;

const MessageInput = styled.input`
    background-color: ${(props) => props.theme.gray_400};
    padding: 1rem;
    border: transparent;
    outline: transparent;
    color: ${(props) => props.theme.gray_300};
    width: 100%;
`;

const MemeIcon = styled(BsStars)`
    fill: ${(props) => props.theme.gray_300};
`;

export {
    Container,
    Header,
    Heading,
    OnlineBadge,
    UsersContainer,
    Label,
    User,
    UserImage,
    UserName,
    Main,
    MainHeader,
    MessagesWrapper,
    InputWrapper,
    MessageInput,
    MemeIcon
};
