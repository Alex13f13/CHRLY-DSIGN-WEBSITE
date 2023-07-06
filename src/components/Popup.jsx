/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import styled from "styled-components";
import { themes } from "../styles/themes";
import { Button } from "./Button";
import { useTheme } from "../styles/ThemeContext";
import { useOppositeTheme } from "../utils/useOppositeTheme";
import { THEME } from "../utils/constants";
import { paths } from "../router/paths";
import { useNavigate } from "react-router-dom";
import { colors } from "../styles/colors";

const PopupWrapper = styled.div`
	${({ theme }) => themes[theme]}
	border: 1px solid ${({ theme }) => (theme === THEME.primary ? colors.white : colors.black)};
	border-radius: 30px;
	position: fixed;
	bottom: 6.45vh;
	left: 7.58vw;
	/* width: 84.61vw; */
	height: 6.98vh;
	z-index: 100;
	font-size: 1.39vw;
	font-weight: 300;
	display: flex;
	align-items: center;
`;

const PopupContent = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 1.97vh 2.66vw;
	gap: 19.56vw;
`;

const ButtonsContent = styled.div`
	display: flex;
	gap: 1.39vw;
`;

export default function Popup() {
	const [isOpen, setIsOpen] = useState(true);
	const { theme } = useTheme();
	const navigate = useNavigate();

	const handleAccept = () => {
		setIsOpen(false);
	};

	const handleLearn = () => {
		navigate(paths.cookies);
	};

	return (
		isOpen && (
			<PopupWrapper theme={theme}>
				<PopupContent>
					<p>Hello there! This website uses cookies to provide a better browsing experience.</p>
					<ButtonsContent>
						<Button theme={theme} onClick={handleLearn} text="Learn More" />
						<Button theme={useOppositeTheme()} onClick={handleAccept} text="Accept" />
					</ButtonsContent>
				</PopupContent>
			</PopupWrapper>
		)
	);
}
