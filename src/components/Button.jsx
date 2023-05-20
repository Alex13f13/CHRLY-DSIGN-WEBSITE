import styled from "styled-components";
import { themes } from "../styles/themes";
import { THEME } from "../utils/constants";

const StyledButton = styled.button`
	${({ theme }) => themes[theme]}
	font-size: 1rem;
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: ${({ theme }) => (theme === THEME.PRIMARY ? "lightgray" : "gray")};
	}
`;

// eslint-disable-next-line react/prop-types
export const Button = ({ onClick = () => {}, theme = THEME.PRIMARY, children }) => {
	return (
		<StyledButton onClick={onClick} theme={theme}>
			{children}
		</StyledButton>
	);
};
