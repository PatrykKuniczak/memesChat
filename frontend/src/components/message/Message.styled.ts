import styled from "styled-components";

const MessageContainer = styled.div`
    display: flex;
    align-items: start;
    gap: 1rem;
`;

const MessageContent = styled.p`
    flex: 1;

    border-radius: 5px;
    padding: 0.5rem;

    background-color: ${({ theme }) => theme.gray_400};
    color: ${({ theme }) => theme.gray_300};

    cursor: pointer;
`;

const MessageAuthorImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;

    object-fit: cover;
`;

const MessageAuthor = styled.p`
    padding-block: 0.25rem;

    color: ${({ theme }) => theme.gray_300};
`;

const MessageSettings = styled.div`
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
    MessageSettings
};
