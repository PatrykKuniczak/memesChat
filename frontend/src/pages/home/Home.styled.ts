import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: 30% minmax(0, 1fr);
    gap: 1.5rem;
    //test it!
    margin: 1rem;
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Heading = styled.h1`
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
`;

const OnlineBadge = styled.div`
    padding: 0.5rem 1.5rem;
    background-color: ${(props) => props.theme.primary};
    color: #fff;
    border-radius: 5px;
`;

const UsersContainer = styled.section`
    margin-top: 1.5rem;
`;

const Label = styled.p`
    color: ${(props) => props.theme.gray_300};
    margin-top: 1rem;
`;

const User = styled.div`
    display: flex;
    align-items: center;
    padding: 1.5rem;
    gap: 1rem;

    &:nth-child(odd) {
        background-color: ${(props) => props.theme.gray_500};
    }
`;

const UserImage = styled.img`
    object-fit: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const UserName = styled.p`
    color: #fff;
    font-weight: 500;
    font-size: 1.25rem;
`;

export {
    Container,
    Header,
    Heading,
    OnlineBadge,
    UsersContainer,
    Label,
    User,
    UserImage,
    UserName
};
