import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 5px;
  color: #fff;
`;
const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primary};
`;
const NavLink = styled(Link)`
  color: ${(props) => props.theme.gray_300};
  text-decoration: underline;
`;

export { Button, PrimaryButton, NavLink };
