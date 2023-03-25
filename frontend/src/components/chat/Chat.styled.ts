import styled from "styled-components";

const ChatContainer = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 400px;
    max-height: calc(100vh - 6rem);
    padding: 0.5rem;
    border-radius: 5px;

    background: ${({ theme }) => theme.gray_semitransparent};
    backdrop-filter: blur(128px);
`;

const ChatHeader = styled.header`
    display: flex;
    justify-content: end;
    padding: 1rem;
    border-radius: 5px;

    background: rgba(22, 22, 22, 0.3);

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        padding: 0.7rem;
    }
`;

export { ChatContainer, ChatHeader };
