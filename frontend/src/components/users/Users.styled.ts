import styled from "styled-components";

const UsersContainer = styled.section`
    margin-top: 1.5rem;
`;

const UsersListWrapper = styled.div`
    max-height: calc(100vh - 15rem);
    margin-top: 0.5rem;
    padding: 0.5rem;
    overflow-y: auto;

    background: ${({ theme }) => theme.gray_semitransparent};
    border-radius: 5px;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background: ${({ theme }) => theme.black};
    }

    @media (max-width: 800px) {
        max-height: 200px;
    }
`;

const Label = styled.p`
    color: ${({ theme }) => theme.gray_300};

    margin-top: 1rem;
`;

export { UsersContainer, UsersListWrapper, Label };
