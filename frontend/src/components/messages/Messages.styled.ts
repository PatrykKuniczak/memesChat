import styled from "styled-components";

const MessagesWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1rem;

    margin-top: 1rem;
    margin-left: 1rem;

    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background: ${({ theme }) => theme.black};
    }

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        gap: 0.5rem;
        margin: 0.5rem 0;
    }
`;

export { MessagesWrapper };
