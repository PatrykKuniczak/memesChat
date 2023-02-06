import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100vh;

    background-color: hsla(240, 100%, 13%, 1);
    background-image: radial-gradient(at 40% 20%, hsla(264, 71%, 28%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(264, 80%, 52%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(264, 74%, 60%, 1) 0px, transparent 50%),
    radial-gradient(at 73% 53%, hsla(264, 58%, 17%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(264, 90%, 61%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(265, 100%, 21%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(264, 94%, 35%, 1) 0px, transparent 50%);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

export default GlobalStyles;
