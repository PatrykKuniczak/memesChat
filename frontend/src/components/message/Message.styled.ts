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
    flex: 1;
    width: fit-content;

    border: none;
    border-radius: 5px;
    padding: 0.5rem;

    background-color: ${({ theme }) => theme.gray_400};
    color: ${({ theme }) => theme.gray_300};
`;

const MessageError = styled.p`
    margin-left: 10px;
    font-size: ${({ theme }) => theme.font_xs};

    color: ${({ theme }) => theme.red};
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const MessageAuthorImage = styled.img`
    width: 32px;
    height: 32px;
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
`;

const MessageSettings = styled.div`
    position: absolute;
    right: -80px;
    top: -35px;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    border-radius: 25px;
    padding: 0.5rem 1rem;

    background-color: ${({ theme }) => theme.gray_400};
    color: ${({ theme }) => theme.gray_300};
`;

export {
    MessageContainer,
    MessageContent,
    MessageAuthorImage,
    MessageAuthor,
    MessageSettings,
    MessageError,
    Wrapper,
    MessageContentWrapper
};
