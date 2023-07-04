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
	border: 0.138888889vw solid ${({ theme }) =>
		theme === THEME.primary ? colors.white : colors.black};
	border-radius: 50px;
	position: fixed;
	bottom: 6vh;
	left: 10%;
	width: 80%;
	height: 4vw;
	z-index: 100;
	font-size: 0.9vw;
	font-weight: 500;
	display: flex;
	align-items: center;
`;

const PopupContent = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2.777777778vw;
`;

const ButtonsContent = styled.div`
	display: flex;
	justify-content: space-between;
	width: 20%;
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
