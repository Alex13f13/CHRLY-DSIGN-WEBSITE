/* eslint-disable react/prop-types */
import styled from "styled-components";
import { themes } from "../styles/themes";
import { THEME } from "../utils/constants";
import { colors } from "../styles/colors";

const StyledButtonIcon = styled.div`
	width: 1.04vw;
	height: 0.69vw;
	margin-left: 0.69vw;
	background-color: ${({ theme }) => (theme === THEME.primary ? colors.white : colors.black)};
	mask: ${({ icon }) => `url(${icon}) no-repeat center / contain`};
	transition: background-color 0.5s ease;
`;

const StyledButton = styled.div`
	${({ theme }) => themes[theme]}
	font-size: 0.81vw;
	font-weight: 400;
	padding: 0.81vh
		${({ icon, buttonType }) => (icon ? (buttonType === 1 ? "0.93vw" : "1.39vw") : "1.45vw")} 0.81vh
		1.45vw;
	border: 1px solid ${({ theme }) => (theme === THEME.primary ? colors.white : colors.black)};
	border-radius: 50px;
	cursor: pointer;
	display: flex;
	align-items: center;

	//Animation
	transition: background-color 0.5s ease, color 0.5s ease, border 0.5s ease;
	/* transition: background-image 0.8s ease, background-size 0.8s ease, background-position 0.8s ease,
		color 0.8s ease, border 0.8s ease;
	background-size: 250% auto;
	background-image: linear-gradient(
		to right,
		${({ theme }) => (theme === THEME.secondary ? colors.black : colors.white)} 0%,
		${({ theme }) => (theme === THEME.secondary ? colors.black : colors.white)} 51%,
		${({ theme }) => (theme === THEME.secondary ? colors.white : colors.black)} 52%,
		${({ theme }) => (theme === THEME.secondary ? colors.white : colors.black)} 100%
	);
	background-position: right bottom; */

	&:hover {
		//Animation
		background-color: ${({ theme }) => (theme === THEME.primary ? colors.white : colors.black)};
		/* background-position: left top; */

		color: ${({ theme }) => (theme === THEME.primary ? colors.black : colors.white)};
		border: 1px solid ${({ theme }) => (theme === THEME.primary ? colors.black : colors.white)};

		${StyledButtonIcon} {
			background-color: ${({ theme }) => (theme === THEME.primary ? colors.black : colors.white)};
		}
	}
`;

export const Button = ({
	onClick = () => {},
	theme = THEME.primary,
	text = "",
	icon = null,
	buttonType = 1,
}) => {
	return (
		<StyledButton onClick={onClick} theme={theme} icon={icon} buttonType={buttonType}>
			{text}
			{icon && <StyledButtonIcon theme={theme} icon={icon} buttonType={buttonType} />}
		</StyledButton>
	);
};
