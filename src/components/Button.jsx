// src/components/GenericButton.js
import styled from "styled-components";

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

const Button = ({ onClick, theme, children }) => {
	return (
		<StyledButton onClick={onClick} theme={theme}>
			{children}
		</StyledButton>
	);
};

export default Button;
