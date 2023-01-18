import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
    border: none;
    border-radius: 5px;
    padding: 1rem 2.5rem;

    color: ${({ theme }) => theme.white};
`;

const PrimaryButton = styled(Button)`
    background-color: ${({ theme }) => theme.primary};
`;

const NavLink = styled(Link)`
    color: ${({ theme }) => theme.gray_300};

    text-decoration: underline;
`;

export { Button, PrimaryButton, NavLink };
