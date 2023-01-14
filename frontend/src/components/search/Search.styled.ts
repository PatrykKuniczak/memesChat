import styled, { css } from "styled-components";
import { BsSearch } from "react-icons/bs";
import { InputHTMLAttributes } from "react";

const SearchWrapper = styled.div<{ $variant: string }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    border-radius: 5px;
    padding: 1rem;
  
  ${(props) => {
      if (props.$variant === "dark") {
          return css`
              background-color: ${(props) => props.theme.gray_500};
          `;
      }
      return css`
          background: rgba(112, 112, 112, 0.1);
          border: 1px solid rgba(65, 65, 65, 0.66);
          backdrop-filter: blur(27px);
      `;
  }}}
`;

const SearchInput = styled.input.attrs<InputHTMLAttributes<HTMLInputElement>>(
    () => ({
        type: "search"
    })
)`
    border: transparent;
    outline: transparent;

    background-color: transparent;
    color: ${(props) => props.theme.gray_300};

    font-size: 1rem;
`;

const SearchIcon = styled(BsSearch)`
    color: ${(props) => props.theme.gray_300};
`;

export { SearchWrapper, SearchInput, SearchIcon };
