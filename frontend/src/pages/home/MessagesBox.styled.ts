import styled from "styled-components";

const MessageContainer = styled.div`
    display: flex;
    align-items: start;
    gap: 1rem;
`;

const Message = styled.p`
    border-radius: 5px;
    background-color: ${(props) => props.theme.gray_400};
    color: ${(props) => props.theme.gray_300};
    padding: 0.5rem;
    cursor: pointer;
    flex: 1;
`;

const MessageAuthorImage = styled.img`
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
`;

const MessageAuthor = styled.p`
    color: ${(props) => props.theme.gray_300};
    padding-block: 0.25rem;
`;

const MessageSettings = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 25px;
    background-color: ${(props) => props.theme.gray_400};
    padding: 0.5rem 1rem;
    color: ${(props) => props.theme.gray_300};
`;

export {
    MessageContainer,
    Message,
    MessageAuthorImage,
    MessageAuthor,
    MessageSettings
};
