import styled, { css } from "styled-components";
import { BsSearch } from "react-icons/bs";
import { InputHTMLAttributes } from "react";

const SearchWrapper = styled.div<{ $variant: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  
  border-radius: 5px;
  padding: 0 1rem 0 0;

  ${({ $variant }) => {
      if ($variant === "dark") {
          return css`
              background-color: ${({ theme }) => theme.gray_500};
          `;
      }
      return css`
          background: ${({ theme }) => theme.gray_semitransparent};
          backdrop-filter: blur(27px);
      `;
  }}}
`;

const SearchInput = styled.input.attrs<InputHTMLAttributes<HTMLInputElement>>(
    () => ({
        type: "search"
    })
)`
    padding: 1rem;
    width: -webkit-calc(100% - 10px);
    width: -moz-calc(100% - 10px);

    border: transparent;
    outline: transparent;

    background-color: transparent;
    color: ${({ theme }) => theme.white};

    font-size: 1rem;
`;

const SearchIcon = styled(BsSearch)`
    color: ${({ theme }) => theme.gray_300};
`;

export { SearchWrapper, SearchInput, SearchIcon };
