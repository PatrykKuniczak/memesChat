import styled from "styled-components";

const Label = styled.label`
    color: ${({ theme }) => theme.gray_300};
    font-size: ${({ theme }) => theme.font_md};
    margin-top: 1.5rem;
`;

const Input = styled.input`
    border-radius: 5px;
    border: 1px solid rgba(65, 65, 65, 0.66);
    padding: 1rem;
    margin-top: 0.5rem;

    background: rgba(112, 112, 112, 0.1);
    backdrop-filter: blur(27px);
`;

const Error = styled.p`
  color: #e34a4a;
`;

export {Label, Input, Error};