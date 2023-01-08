import styled from "styled-components";
import { BsStars, BsImage } from "react-icons/bs";

const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill);
    gap: 1.5rem;
    padding: 2.5rem 0 2.5rem 2.5rem;

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
    background-color: ${(props) => props.theme.primary};
    color: #fff;

    border-radius: 5px;
    padding: 0.5rem 1.5rem;
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
    width: 50px;
    height: 50px;
    border-radius: 50%;

    object-fit: cover;
`;

const UserName = styled.p`
    color: #fff;

    font-size: 1.25rem;
    font-weight: 500;
`;

const Chat = styled.main`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    border-radius: 5px;

    background-color: ${(props) => props.theme.gray_500};
`;

const ChatHeader = styled.header`
    display: flex;
    justify-content: end;
    padding: 1rem;
    border-radius: 5px;

    background-color: ${(props) => props.theme.gray_400};
`;

const MessagesWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;

    min-height: 400px;
    max-height: 100vh;

    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: #313131;
        border-radius: 3px;
    }
`;

const InputWrapper = styled.header`
    display: flex;
    align-items: center;
    margin: 3rem;
    padding: 0.5rem;
    border-radius: 5px;

    background-color: ${(props) => props.theme.gray_400};
    border: 1px solid #fff;
`;

const MessageInput = styled.input`
    padding: 1rem;
    width: 100%;
    outline: transparent;
    border: transparent;

    color: ${(props) => props.theme.gray_300};
    background-color: ${(props) => props.theme.gray_400};
`;

const MemeIcon = styled(BsStars)`
    margin: 0 0.5rem;

    fill: ${(props) => props.theme.gray_300};
    cursor: pointer;
`;

const MemeGenerateIcon = styled(BsImage)`
    margin: 0 0.5rem;

    fill: ${(props) => props.theme.gray_300};
    cursor: pointer;
`;

export {
    Main,
    Header,
    Heading,
    OnlineBadge,
    UsersContainer,
    Label,
    User,
    UserImage,
    UserName,
    Chat,
    ChatHeader,
    MessagesWrapper,
    InputWrapper,
    MessageInput,
    MemeIcon,
    MemeGenerateIcon
};
