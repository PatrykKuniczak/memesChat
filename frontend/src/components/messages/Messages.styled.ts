import { scrollBar } from "assets/styles/theme";
import styled from "styled-components";

const MessagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;

    padding: 1rem;

    ${scrollBar};

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        gap: 0.5rem;
    }
`;

export { MessagesWrapper };
