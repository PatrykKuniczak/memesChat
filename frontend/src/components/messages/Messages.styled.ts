import styled from "styled-components";

const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  
  padding: 1rem;

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
  }
`;

export { MessagesWrapper };
