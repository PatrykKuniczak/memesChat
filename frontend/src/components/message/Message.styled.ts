import styled from "styled-components";

const MessageContainer = styled.div`
    display: flex;
    align-items: start;
    gap: 1rem;

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        gap: 0.5rem;
    }
`;

const MessageContent = styled.input`
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    margin: 0.5rem 0 0 2rem;

    background-color: ${({ theme }) => theme.gray_400};
    color: ${({ theme }) => theme.gray_300};

    word-break: break-all;
`;

const MessageInput = styled(MessageContent)`
    width: 200px;

    @media (min-width: ${({ theme }) => theme.media_lg}) {
        width: 300px;
    }
`;

const MessageError = styled.p`
    margin: 0.5rem 0 0 2rem;

    color: ${({ theme }) => theme.red};

    font-size: ${({ theme }) => theme.font_xs};
`;

const MessageAuthorWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const MessageAuthorImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;

    object-fit: cover;
    user-select: none;
`;

const MessageAuthor = styled.p`
    padding-block: 0.25rem;

    color: ${({ theme }) => theme.gray_300};
`;

const MessageContentWrapper = styled.div`
    position: relative;

    display: flex;
    gap: 0.5rem;
`;

const MessageSettingsWrapper = styled.div`
    display: flex;
    flex-shrink: 0;

    width: 72px;
`;

const MessageSettings = styled.div`
    position: absolute;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    border-radius: 25px;
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;

    background-color: ${({ theme }) => theme.gray_400};
    color: ${({ theme }) => theme.gray_300};
`;

export {
    MessageInput,
    MessageContainer,
    MessageContent,
    MessageAuthorImage,
    MessageAuthor,
    MessageSettingsWrapper,
    MessageSettings,
    MessageError,
    MessageAuthorWrapper,
    MessageContentWrapper
};
