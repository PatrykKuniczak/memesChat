import styled, { css } from "styled-components";
import { BsSearch } from "react-icons/bs";
import { InputHTMLAttributes } from "react";

const SearchWrapper = styled.div<{ $variant: string }>`
  position: sticky;
  top: 0;
  z-index: 1;

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
          background-color: ${({ theme }) => theme.gray_dark};
          backdrop-filter: blur(27px);
      `;
  }}
}
`;

const SearchInput = styled.input.attrs<InputHTMLAttributes<HTMLInputElement>>(
    () => ({
        type: "search"
    })
)`
    padding: 1rem;
    width: -webkit-calc(100% - 10px);
    width: -moz-calc(100% - 10px);

    border: none;
    outline: transparent;

    background: transparent;
    color: ${({ theme }) => theme.white};

    font-size: ${({ theme }) => theme.font_sm};

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        padding: 0.7rem;
    }
`;

const SearchIcon = styled(BsSearch)`
    color: ${({ theme }) => theme.gray_300};
`;

export { SearchWrapper, SearchInput, SearchIcon };
