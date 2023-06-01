import { Link } from "react-router-dom";
import { paths } from "../router/paths";
import styled from "styled-components";
import { themes } from "../styles/themes";
import { useTheme } from "../styles/ThemeContext";
import { Button } from "./Button";
import { useState } from "react";
import { THEME } from "../utils/constants";

const StyledHeader = styled.div`
	${({ theme }) => themes[theme]}
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
`;

const StyledTop = styled.div`
	height: 10vh;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 0 10%;
`;

const StyledButtons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 25%;
`;

const StyledBody = styled.div`
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
	margin: 0 10%;
`;

const StyledLinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => (theme === THEME.primary ? "#e3e3e3" : "#000000")};
	font-size: 1.6667vw;
	margin-bottom: 0.6944vw;
	cursor: pointer;
`;

const StyledFooter = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	p {
		font-size: 0.9722vw;
		margin-right: 1.3889vw;
		color: ${({ theme }) => (theme === THEME.primary ? "#77788C" : "#E3E3E3")};
	}
`;

// eslint-disable-next-line react/prop-types
export default function Header() {
	const { theme } = useTheme();
	const [open, setOpen] = useState(false);

	const useOppositeTheme = () => {
		return theme === THEME.primary ? THEME.secondary : THEME.primary;
	};

	const handleMenu = () => {
		setOpen(!open);
	};

	const sendEmail = () => {
		window.open("mailto:hello@chrlydsign.com");
	};

	return (
		<StyledHeader theme={theme}>
			<StyledTop>
				{theme === THEME.primary ? <p>CHRLY DSIGN</p> : <p>CHRLY DSIGN</p>}
				{/* <img src="" alt="CHRLY DSIGN LOGO" /> */}
				<StyledButtons>
					<Button theme={useOppositeTheme()} onClick={sendEmail} text="LET’S TALK" />
					{open ? (
						<Button theme={theme} onClick={handleMenu} text="CLOSE" />
					) : (
						<Button theme={theme} onClick={handleMenu} text="MENU" />
					)}
				</StyledButtons>
			</StyledTop>
			{open && (
				<StyledBody>
					<StyledLinkContainer>
						<StyledLink theme={theme} onClick={handleMenu} to={paths.landing}>
							Home
						</StyledLink>
						<StyledLink theme={theme} onClick={handleMenu} to={paths.aboutUs}>
							About Us
						</StyledLink>
						<StyledLink theme={theme} onClick={handleMenu} to={paths.legal}>
							Legal
						</StyledLink>
						<StyledLink theme={theme} onClick={handleMenu} to={paths.legal}>
							Example Page
						</StyledLink>
						<StyledLink theme={theme} onClick={handleMenu} to={paths.legal}>
							Page Example
						</StyledLink>
						<StyledLink theme={theme} onClick={handleMenu} to={paths.legal}>
							Other Link Example
						</StyledLink>
						{/* <StyledLink theme={theme} to={`${paths.workDetails}?workId=0`}>Work 1</StyledLink>
			<StyledLink theme={theme} to={`${paths.workDetails}?workId=1`}>Work 2</StyledLink> */}
					</StyledLinkContainer>
					<StyledFooter theme={theme}>
						<p>hello@chrlydsign.com</p>
						<p>Follow on Instagram</p>
					</StyledFooter>
				</StyledBody>
			)}
		</StyledHeader>
	);
}
