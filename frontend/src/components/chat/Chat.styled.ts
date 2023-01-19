import styled from "styled-components";

const ChatContainer = styled.main`
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

export { ChatContainer, ChatHeader };
