import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-family: 'Gelion', -apple-system, BlinkMacSystemFont, 'Segoe UI';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const StyledGlobalStyle = () => {
	return <GlobalStyle />;
};

export default StyledGlobalStyle;
