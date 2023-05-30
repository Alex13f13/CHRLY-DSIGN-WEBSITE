import styled from "styled-components";
import { themes } from "../styles/themes";
import { THEME } from "../utils/constants";
import arrow from "../assets/arrow.svg";

const StyledButton = styled.div`
	${({ theme }) => themes[theme]}
	font-size: 14px;
	font-weight: 500;
	padding: 0.5rem 1.5rem;
	border: 2px solid ${({ theme }) => (theme === THEME.primary ? "#e3e3e3" : "#000000")};
	border-radius: 50px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	margin: 0 10px;

	&:hover {
		background-color: ${({ theme }) => (theme === THEME.primary ? "#e3e3e37b" : "#eaeaea79")};
	}
`;

const StyledIcon = styled.div`
	width: 20px;
	height: 20px;
	margin-left: 6px;
	background-color: ${({ theme }) => (theme === THEME.primary ? "#e3e3e3" : "#000000")};
	mask: url(${arrow}) no-repeat center / contain;
`;

// eslint-disable-next-line react/prop-types
export const Button = ({ onClick = () => {}, theme = THEME.primary, text = "" }) => {
	return (
		<StyledButton onClick={onClick} theme={theme}>
			{text}
			<StyledIcon theme={theme} />
		</StyledButton>
	);
};
