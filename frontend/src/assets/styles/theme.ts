import { css } from "styled-components";

const THEME_DARK = {
    // colors
    primary: "#962EFF",
    primary_hover: "#700BD4",
    primary_scroll_bar: "#DB9BFC8C",
    primary_scroll_bar_hover: "#BA5BFC8C",

    white: "#D9D1EB",
    red: "#e34a4a",

    gray_200: "#2F2F2F",
    gray_300: "#8e8793",
    gray_400: "#16131f",
    gray_500: "#161616",
    gray_hover: "#242424",
    gray_dark: "#141414cc",
    gray_semitransparent: "#1414147F",

    black: "#050050",

    // font sizes
    font_xs: ".85rem",
    font_sm: "1rem",
    font_md: "1.125rem",
    font_lg: "1.5rem",
    font_xl: "1.75rem",
    font_xxl: "3rem",

    // font weights
    font_extra_light: 200,
    font_light: 300,
    font_regular: 400,
    font_medium: 500,
    font_bold: 700,
    font_black: 900,

    // media queries
    media_sm: "640px",
    media_md: "768px",
    media_lg: "1024px",
    media_xl: "1280px",
    media_xxl: "1536px"
};

const scrollBar = css`
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        margin-block: 1rem;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background: ${({ theme }) => theme.primary_scroll_bar};
    }

    &::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.primary_scroll_bar_hover};
    }
`;

const hintMessage = css`
    position: relative;

    border: none;

    cursor: pointer;

    &::after {
        position: absolute;

        padding: 0.5rem;
        border-radius: 5px;

        background: ${({ theme }) => theme.gray_300};
        color: ${({ theme }) => theme.white};

        font-size: ${({ theme }) => theme.font_xs};

        opacity: 0;
        white-space: nowrap;
    }

    @media (min-width: ${({ theme }) => theme.media_md}) {
        &:hover {
            &::after {
                transition: opacity 0.2s 1s;
                opacity: 1;
            }
        }
    }
`;

export { THEME_DARK, scrollBar, hintMessage };
