import styled from "styled-components";

const ChatContainer = styled.main`
    display: flex;
    flex-direction: column;

    padding: .5rem;
    border-radius: 5px;

    min-height: 400px;

    background: ${({ theme }) => theme.gray_semitransparent};
    backdrop-filter: blur(128px);

    @media (max-width: ${({ theme }) => theme.media_md}) {
        max-height: calc(100vh - 410px);
    }

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        min-height: calc(100vh - 250px);
        max-height: 100vh;
    }
`;

const ChatHeader = styled.header`
    display: flex;
    justify-content: end;
    padding: 1rem;
    border-radius: 5px;

    background: rgba(22, 22, 22, 0.3);

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        padding: 0.3rem;
    }
`;

export { ChatContainer, ChatHeader };
