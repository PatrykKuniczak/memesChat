import styled from "styled-components";
import { BsStars, BsImage } from "react-icons/bs";

const Root = styled.div`
    height: 100vh;
`;

const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill);
    gap: 1.5rem;
    padding: 1rem;

    @media (min-width: 50em) {
        grid-template-columns: 1fr 2fr;

        padding: 5rem 2.5rem 1rem;
    }
`;

const Aside = styled.aside`
    max-height: calc(100vh - 6rem);

    @media (max-width: 50em) {
        max-height: 400px;
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
    border-radius: 5px;
    padding: 0.5rem 1.5rem;

    background-color: ${(props) => props.theme.primary};
    color: #fff;
`;

const UsersContainer = styled.section`
    margin-top: 1.5rem;
`;

const UserList = styled.div`
    max-height: calc(100vh - 15rem);

    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: #313131;
        border-radius: 3px;
    }

    @media (max-width: 50em) {
        max-height: 200px;
    }
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

    @media (max-width: 50em) {
        padding: 0.5rem;
    }
`;

const UserImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;

    object-fit: cover;

    @media (max-width: 50em) {
        width: 40px;
        height: 40px;
    }
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

    max-height: calc(100vh - 6rem);
    min-height: 400px;

    background-color: ${(props) => props.theme.gray_500};

    @media (max-width: 50em) {
        max-height: calc(100vh - 400px);
    }
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
    margin: 2rem;
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

const MemeButton = styled.button`
    border: none;

    background-color: transparent;
`;

const MemeGenerateIcon = styled(BsImage)`
    margin: 0 0.5rem;

    fill: ${(props) => props.theme.gray_300};
    cursor: pointer;
`;

const MemeGenerateButton = styled.button`
    border: none;

    background-color: transparent;
`;

export {
    Root,
    Aside,
    Main,
    Header,
    Heading,
    OnlineBadge,
    UsersContainer,
    UserList,
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
    MemeButton,
    MemeGenerateIcon,
    MemeGenerateButton
};
