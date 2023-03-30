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

    background-color: hsla(255, 80%, 30%, 1);
    background-image: radial-gradient(at 40% 20%, hsla(264, 71%, 28%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(264, 80%, 52%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(264, 74%, 40%, 1) 0px, transparent 50%),
    radial-gradient(at 73% 53%, hsla(264, 58%, 40%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(264, 90%, 50%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(265, 100%, 50%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(264, 94%, 35%, 1) 0px, transparent 50%);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  textarea {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }
`;

export default GlobalStyles;
