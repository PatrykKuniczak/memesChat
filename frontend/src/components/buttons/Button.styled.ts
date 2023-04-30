import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
    padding: 0.7rem 2rem;
    border: 1px solid ${({ theme }) => theme.gray_500};
    border-radius: 0.2rem;

    color: ${({ theme }) => theme.white};

    font-size: ${({ theme }) => theme.font_sm};
    font-weight: ${({ theme }) => theme.font_regular};

    cursor: pointer;
    transition: all 0.2s;

    @media (max-width: ${({ theme }) => theme.media_md}) {
        width: 100%;
        padding: 1rem;
    }
`;

const PrimaryButton = styled(Button)`
    background: ${({ theme }) => theme.primary};

    &:hover {
        background: ${({ theme }) => theme.primary_hover};
    }
`;

const SecondaryButton = styled(Button)`
    background: ${({ theme }) => theme.gray_200};

    &:hover {
        background: ${({ theme, disabled }) =>
            disabled ? null : theme.gray_hover};
    }

    color: ${({ theme, disabled }) => (disabled ? theme.gray_300 : null)};
`;

const NavLink = styled(Link)`
    color: ${({ theme }) => theme.gray_300};

    text-decoration: underline;
`;

export { Button, PrimaryButton, SecondaryButton, NavLink };
