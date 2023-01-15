import styled from "styled-components";

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

export { MessagesWrapper };
