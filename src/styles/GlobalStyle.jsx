import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.cdnfonts.com/css/gelion');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Gelion','Segoe UI';
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
