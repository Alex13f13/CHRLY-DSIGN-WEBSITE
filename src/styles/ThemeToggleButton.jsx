import styled from "styled-components";
import { useTheme } from "./ThemeContext";

const StyledButton = styled.button`
	font-size: 1rem;
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	background-color: ${({ theme }) => (theme === "primary" ? "white" : "black")};
	color: ${({ theme }) => (theme === "primary" ? "black" : "white")};
	transition: background-color 0.3s ease;

	&:hover {
		background-color: ${({ theme }) => (theme === "primary" ? "lightgray" : "gray")};
	}
`;

const ThemeToggleButton = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<StyledButton theme={theme} onClick={toggleTheme}>
			Cambiar tema
		</StyledButton>
	);
};

export default ThemeToggleButton;
