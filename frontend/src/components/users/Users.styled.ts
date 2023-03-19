import styled from "styled-components";

const UsersContainer = styled.section`
    margin-top: 1rem;
    padding: 0.5rem;
    overflow-y: auto;
    border-radius: 5px;

    background: ${({ theme }) => theme.gray_semitransparent};

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background: ${({ theme }) => theme.black};
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
