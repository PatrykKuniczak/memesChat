import styled from "styled-components";

const UserContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    padding: 0.5rem;
    border-radius: 5px;

    &:nth-child(odd) {
        background: rgba(22, 22, 22, 0.4);
        backdrop-filter: blur(27px);
    }

    @media (min-width: ${({ theme }) => theme.media_md}) {
        padding: 1.5rem;
    }
`;

const UserImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;

    object-fit: cover;

    @media (min-width: ${({ theme }) => theme.media_md}) {
        width: 50px;
        height: 50px;
    }
`;

const UserName = styled.p`
    color: ${({ theme }) => theme.white};

    word-break: break-all;
    font-size: ${({ theme }) => theme.font_md};
    font-weight: ${({ theme }) => theme.font_medium};

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        font-size: ${({ theme }) => theme.font_sm};
    }
`;

export { UserContainer, UserImage, UserName };
