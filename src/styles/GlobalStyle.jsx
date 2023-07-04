import { createGlobalStyle } from "styled-components";
import arrow from "../assets/arrow.svg";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.cdnfonts.com/css/gelion');

  *, *::before, *::after {
    cursor: url(${arrow}), auto;
  }

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
