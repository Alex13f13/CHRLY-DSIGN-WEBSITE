import { createGlobalStyle, css } from "styled-components";
import { useTheme } from "./ThemeContext";

const themes = {
	primary: css`
		background-color: black;
		color: white;
	`,
	secondary: css`
		background-color: white;
		color: black;
	`,
};

const GlobalStyle = createGlobalStyle`
  body {
    ${({ theme }) => themes[theme]}
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const StyledGlobalStyle = () => {
	const { theme } = useTheme();
	return <GlobalStyle theme={theme} />;
};

export default StyledGlobalStyle;
