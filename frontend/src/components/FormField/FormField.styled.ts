import styled from "styled-components";

const Label = styled.label`
    margin-top: 1.5rem;
    color: ${({ theme }) => theme.gray_300};
    font-size: ${({ theme }) => theme.font_md};
`;

const Input = styled.input`
    margin-top: 0.5rem;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid rgba(65, 65, 65, 0.66);

    color: ${({ theme }) => theme.white};
    background: rgba(112, 112, 112, 0.1);
    backdrop-filter: blur(27px);
    font-size: ${({ theme }) => theme.font_md};
`;

const Error = styled.p`
    color: ${({ theme }) => theme.red};
`;

export { Label, Input, Error };
