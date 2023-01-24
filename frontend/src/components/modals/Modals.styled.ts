import styled from "styled-components";
import { Wrapper } from "../wrapper/Wrapper.styled";

const ModalsWrapper = styled(Wrapper)``;

const ModalSpan = styled.span`
    white-space: nowrap;

    color: ${({ theme }) => theme.white};
`;

export { ModalsWrapper, ModalSpan };
