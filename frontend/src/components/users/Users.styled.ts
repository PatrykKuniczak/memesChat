import { scrollBar } from "assets/styles/theme";
import styled from "styled-components";

const UsersContainer = styled.section`
    margin-top: 1rem;
    padding: 0.5rem;
    overflow-y: auto;
    border-radius: 5px;

    background: ${({ theme }) => theme.gray_semitransparent};

    ${scrollBar};

    &::-webkit-scrollbar-track {
        margin-top: 4rem;
    }

    @media (max-width: ${({ theme }) => theme.media_md}) {
        max-height: 200px;
    }

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        padding: 0.5rem;
        height: 160px;
    }
`;

export { UsersContainer };
