import styled from "styled-components";

const MainWrapper = styled.div`
    height: 100vh;
`;

const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill);
    gap: 1.5rem;
    padding: 1rem;

    @media (min-width: 800px) {
        grid-template-columns: 1fr 2fr;

        padding: 5rem 2.5rem 1rem;
    }
`;

const Aside = styled.aside`
    max-height: calc(100vh - 6rem);

    @media (max-width: 800px) {
        max-height: 400px;
    }
`;

const Header = styled.header`
    display: flex;
    align-items: center;

    gap: 1rem;
`;

const Heading = styled.h1`
    color: ${({ theme }) => theme.white};

    font-size: 1.5rem;
    font-weight: 700;
`;

const OnlineBadge = styled.div`
    border-radius: 5px;
    padding: 0.5rem 1.5rem;

    background-color: ${({ theme }) => theme.primary};
    color: #fff;
`;

const UsersContainer = styled.section`
    margin-top: 1.5rem;
`;

const UserList = styled.div`
    max-height: calc(100vh - 15rem);
    margin-top: 0.5rem;
    padding: 0.5rem;
    overflow-y: auto;

    background: ${({ theme }) => theme.gray_semitransparent};
    border-radius: 5px;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background: ${({ theme }) => theme.black};
    }

    @media (max-width: 800px) {
        max-height: 200px;
    }
`;

const Label = styled.p`
    color: ${({ theme }) => theme.gray_300};

    margin-top: 1rem;
`;

const User = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1.5rem;
    border-radius: 5px;

    &:nth-child(odd) {
        background: rgba(22, 22, 22, 0.4);
        backdrop-filter: blur(27px);
    }

    @media (max-width: 800px) {
        padding: 0.5rem;
    }
`;

const UserImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;

    object-fit: cover;

    @media (max-width: 800px) {
        width: 40px;
        height: 40px;
    }
`;

const UserName = styled.p`
    color: ${({ theme }) => theme.white};

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

    background: ${({ theme }) => theme.gray_semitransparent};
    backdrop-filter: blur(27px);

    @media (max-width: 800px) {
        max-height: calc(100vh - 410px);
    }
`;

const ChatHeader = styled.header`
    display: flex;
    justify-content: end;
    padding: 1rem;
    border-radius: 5px;

    background: rgba(22, 22, 22, 0.3);
`;

export {
    MainWrapper,
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
    ChatHeader
};
