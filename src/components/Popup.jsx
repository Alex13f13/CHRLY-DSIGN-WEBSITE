/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { themes } from "../styles/themes";
import { Button } from "./Button";
import { useTheme } from "../styles/ThemeContext";
import { useOppositeTheme } from "../utils/useOppositeTheme";
import { THEME } from "../utils/constants";
import { paths } from "../router/paths";
import { useNavigate } from "react-router-dom";
import { colors } from "../styles/colors";

const animationEnter = css`
	animation: slide-in 0.5s forwards;
	@keyframes slide-in {
		0% {
			transform: translateY(100%);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
`;

const animationExit = css`
	animation: slide-out 0.5s forwards;
	@keyframes slide-out {
		0% {
			transform: translateY(0);
			opacity: 1;
		}
		100% {
			transform: translateY(100%);
			opacity: 0;
		}
	}
`;

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

	${(props) => (props.open ? animationEnter : animationExit)};
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
	const [isRendered, setIsRendered] = useState(true);
	const { theme } = useTheme();
	const navigate = useNavigate();

	const handleAccept = () => {
		setIsOpen(false);
	};

	const handleLearn = () => {
		navigate(paths.cookies);
	};

	useEffect(() => {
		if (!isOpen) {
			const timer = setTimeout(() => {
				setIsRendered(false);
			}, 500);

			return () => clearTimeout(timer);
		}
	}, [isOpen]);

	return (
		isRendered && (
			<PopupWrapper theme={theme} open={isOpen}>
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
