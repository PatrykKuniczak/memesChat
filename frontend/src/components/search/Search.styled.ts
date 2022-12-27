import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    background-color: ${(props) => props.theme.gray_500};
    border-radius: 5px;
    padding: 1rem;
`;

const Input = styled.input.attrs(() => ({
    type: "search"
}))`
    background-color: ${(props) => props.theme.gray_500};
    border: none;
    border-radius: 5px;
    color: ${(props) => props.theme.gray_300};
    width: 100%;
    font-size: 1rem;
`;

const Icon = styled(BsSearch)`
    color: ${(props) => props.theme.gray_300};
`;

export { Wrapper, Input, Icon };
