import { Link } from "react-router-dom";
import { paths } from "../router/paths";
import styled from "styled-components";
import { themes } from "../styles/themes";
import { useTheme } from "../styles/ThemeContext";
import { Button } from "./Button";
import { useState } from "react";
import { THEME } from "../utils/constants";
import diagonalArrow from "../assets/diagonalArrow.svg";
import cross from "../assets/cross.svg";
import hamburgerIcon from "../assets/hamburgerIcon.svg";
import white_logo from "../assets/white_logo.svg";
import black_logo from "../assets/black_logo.svg";
import { useOppositeTheme } from "../utils/useOppositeTheme";
import { colors } from "../styles/colors";
import { textTypes } from "../styles/textTypes";
import { sendEmail } from "../utils/sendEmail";
import { openLink } from "../utils/openLink";

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
	margin: 0 9.08vw;
`;

const StyledLogo = styled.img`
	width: 8.56vw;
	height: 0.87vw;
	object-fit: contain;
`;

const StyledButtons = styled.div`
	display: flex;
	align-items: center;
	gap: 1.3889vw;
`;

const StyledBody = styled.div`
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const StyledLinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 15.22vh;
	padding-left: 9.08vw;
	width: 15%;
`;

const StyledLink = styled(Link)`
	${textTypes.mainTitles}
	text-decoration: none;
	color: ${({ theme, hovered }) =>
		!hovered ? (theme === THEME.primary ? colors.white : colors.black) : colors.gray};
	padding-bottom: 0.58vw;

	&:hover {
		cursor: pointer;
	}
`;

const StyledFooter = styled.div`
	display: flex;
	padding-left: 9.08vw;
	padding-bottom: 8.5vh;
	gap: 5.96vw;
	margin: 0;
	font-size: 0.9722vw;
	color: ${colors.gray};

	&:hover p {
		cursor: pointer;
	}
`;

export default function Header() {
	const { theme } = useTheme();
	const [open, setOpen] = useState(false);
	const [hoveredLink, setHoveredLink] = useState(null);

	const handleMenu = () => {
		setOpen(!open);
		setHoveredLink(null);
	};

	return (
		<StyledHeader theme={theme}>
			<StyledTop>
				<StyledLogo
					src={theme === THEME.primary ? white_logo : black_logo}
					alt="CHRLY DSIGN LOGO"
				/>
				<StyledButtons>
					<Button
						theme={useOppositeTheme()}
						onClick={() => sendEmail("hello@chrlydsign.com")}
						text="LET’S TALK"
						icon={diagonalArrow}
						buttonType={2}
					/>
					{open ? (
						<Button theme={theme} onClick={handleMenu} text="CLOSE" icon={cross} />
					) : (
						<Button theme={theme} onClick={handleMenu} text="MENU" icon={hamburgerIcon} />
					)}
				</StyledButtons>
			</StyledTop>
			{open && (
				<StyledBody>
					<StyledLinkContainer>
						<StyledLink
							theme={theme}
							hovered={hoveredLink && hoveredLink !== "home"}
							onMouseEnter={() => setHoveredLink("home")}
							onMouseLeave={() => setHoveredLink(null)}
							onClick={handleMenu}
							to={paths.landing}
						>
							Home
						</StyledLink>
						<StyledLink
							theme={theme}
							hovered={hoveredLink && hoveredLink !== "aboutUs"}
							onMouseEnter={() => setHoveredLink("aboutUs")}
							onMouseLeave={() => setHoveredLink(null)}
							onClick={handleMenu}
							to={paths.aboutUs}
						>
							About Us
						</StyledLink>
						<StyledLink
							theme={theme}
							hovered={hoveredLink && hoveredLink !== "work"}
							onMouseEnter={() => setHoveredLink("work")}
							onMouseLeave={() => setHoveredLink(null)}
							onClick={handleMenu}
							to={paths.landingWorks}
						>
							Work
						</StyledLink>
						<StyledLink
							theme={theme}
							hovered={hoveredLink && hoveredLink !== "whatWeDo"}
							onMouseEnter={() => setHoveredLink("whatWeDo")}
							onMouseLeave={() => setHoveredLink(null)}
							onClick={handleMenu}
							to={paths.aboutUsWhatwedo}
						>
							What we do
						</StyledLink>
						<StyledLink
							theme={theme}
							hovered={hoveredLink && hoveredLink !== "evolve"}
							onMouseEnter={() => setHoveredLink("evolve")}
							onMouseLeave={() => setHoveredLink(null)}
							onClick={handleMenu}
							to={paths.landingEvolve}
						>
							Evolve
						</StyledLink>
						<StyledLink
							theme={theme}
							hovered={hoveredLink && hoveredLink !== "awards"}
							onMouseEnter={() => setHoveredLink("awards")}
							onMouseLeave={() => setHoveredLink(null)}
							onClick={handleMenu}
							to={paths.landingAwards}
						>
							Awards
						</StyledLink>
					</StyledLinkContainer>
					<StyledFooter theme={theme}>
						<p onClick={() => sendEmail("hello@chrlydsign.com")}>hello@chrlydsign.com</p>
						<p
							onClick={() => openLink("https://instagram.com/chrly_dsign?igshid=OGQ5ZDc2ODk2ZA==")}
						>
							Follow on Instagram
						</p>
					</StyledFooter>
				</StyledBody>
			)}
		</StyledHeader>
	);
}
