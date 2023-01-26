import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
    padding: 0.7rem 2rem;
    border: 1px solid ${({ theme }) => theme.gray_500};
    border-radius: 0.2rem;

    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.primary};

    font-size: ${({ theme }) => theme.font_sm};
    font-weight: ${({ theme }) => theme.font_regular};

    cursor: pointer;
    transition: all .2s;

    &:hover {
        background: ${({ theme }) => theme.gray_hover};
    }

    @media (max-width: ${({ theme }) => theme.media_md}) {
        width: 100%;
        padding: 1rem;
    }
`;

const PrimaryButton = styled(Button)`
    background: ${({ theme }) => theme.primary};

    transition: all .2s;

    &:hover {
        background: ${({ theme }) => theme.primary_hover};
    }

    @media (max-width: ${({ theme }) => theme.media_md}) {
        width: 100%;
        padding: 1rem;
    }
`;

const SecondaryButton = styled(Button)`
    background: ${({ theme }) => theme.gray_200};
    
    transition: all .2s;

    &:hover {
        background: ${({ theme }) => theme.gray_hover};
    }

    @media (max-width: ${({ theme }) => theme.media_md}) {
        width: 100%;
        padding: 1rem;
    }
`;

const TertiaryButton = styled(Button)`
    background: ${({ theme }) => theme.gray_500};

    @media (max-width: ${({ theme }) => theme.media_md}) {
        width: 100%;
        padding: 1rem;
    }
`;

const NavLink = styled(Link)`
    color: ${({ theme }) => theme.gray_300};

    text-decoration: underline;
`;

export { Button, PrimaryButton, SecondaryButton, TertiaryButton, NavLink };
