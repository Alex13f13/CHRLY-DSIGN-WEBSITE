import styled from "styled-components";
import { themes } from "../styles/themes";
import { THEME } from "../utils/constants";

const StyledButton = styled.div`
	${({ theme }) => themes[theme]}
	font-size: 0.9vw;
	font-weight: 500;
	padding: 1.5% 8%;
	border: 0.138888889vw solid ${({ theme }) => (theme === THEME.primary ? "#e3e3e3" : "#000000")};
	border-radius: 50px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	display: flex;
	align-items: center;

	&:hover {
		background-color: ${({ theme }) => (theme === THEME.primary ? "#e3e3e37b" : "#eaeaea79")};
	}
`;

const StyledButtonIcon = styled.div`
	width: 1.38888889vw;
	height: 1.38888889vw;
	margin-left: 0.69444444vw;
	background-color: ${({ theme }) => (theme === THEME.primary ? "#e3e3e3" : "#000000")};
	mask: ${({ icon }) => `url(${icon}) no-repeat center / contain`};
`;

// eslint-disable-next-line react/prop-types
export const Button = ({ onClick = () => {}, theme = THEME.primary, text = "", icon = null }) => {
	return (
		<StyledButton onClick={onClick} theme={theme}>
			{text}
			{icon && <StyledButtonIcon theme={theme} icon={icon} />}
		</StyledButton>
	);
};
