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
import { useOppositeTheme } from "../utils/useOppositeTheme";
import { colors } from "../styles/colors";

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
	width: 30%;
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
	color: ${({ theme }) => (theme === THEME.primary ? colors.white : colors.black)};
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
		color: ${({ theme }) => (theme === THEME.primary ? colors.darkGray : colors.lightGray)};

		&:hover {
			cursor: pointer;
		}
	}
`;

// eslint-disable-next-line react/prop-types
export default function Header() {
	const { theme } = useTheme();
	const [open, setOpen] = useState(false);

	const handleMenu = () => {
		setOpen(!open);
	};

	const sendEmail = () => {
		window.open("mailto:hello@chrlydsign.com");
	};

	const instagram = () => {
		window.open("https://instagram.com/chrly_dsign?igshid=OGQ5ZDc2ODk2ZA==");
	};

	return (
		<StyledHeader theme={theme}>
			<StyledTop>
				{theme === THEME.primary ? <p>CHRLY DSIGN</p> : <p>CHRLY DSIGN</p>}
				{/* <img src="" alt="CHRLY DSIGN LOGO" /> */}
				<StyledButtons>
					<Button
						theme={useOppositeTheme()}
						onClick={sendEmail}
						text="LET’S TALK"
						icon={diagonalArrow}
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
						<StyledLink theme={theme} onClick={handleMenu} to={paths.landing}>
							Home
						</StyledLink>
						<StyledLink theme={theme} onClick={handleMenu} to={paths.aboutUs}>
							About Us
						</StyledLink>
						<StyledLink theme={theme} onClick={handleMenu} to={paths.landingWorks}>
							Work
						</StyledLink>
						<StyledLink theme={theme} onClick={handleMenu} to={paths.aboutUsWhatwedo}>
							What we do
						</StyledLink>
						<StyledLink theme={theme} onClick={handleMenu} to={paths.landingEvolve}>
							Evolve
						</StyledLink>
						<StyledLink theme={theme} onClick={handleMenu} to={paths.landingAwards}>
							Awards
						</StyledLink>
						{/* <StyledLink theme={theme} onClick={handleMenu} to={paths.legal}>
							Legal
						</StyledLink> */}
					</StyledLinkContainer>
					<StyledFooter theme={theme}>
						<p onClick={sendEmail}>hello@chrlydsign.com</p>
						<p onClick={instagram}>Follow on Instagram</p>
					</StyledFooter>
				</StyledBody>
			)}
		</StyledHeader>
	);
}
