import styled from "styled-components";
import { themes } from "../styles/themes";
import { THEME } from "../utils/constants";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { paths } from "../router/paths";

const StyledFooter = styled.section`
	${({ theme }) => themes[theme]}
	border-top: 1px solid ${({ theme }) => themes[theme].color};
	width: 100%;
	display: grid;
	grid-template-columns: 45% 20% 35%;
	grid-template-rows: 45vh 20vh;
	grid-template-areas:
		"logo links mails"
		"copiright social social";

	p {
		margin: 0;
		font-size: 1.1vw;
	}
`;

const gridCenteringStyles = `
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledLogo = styled.div`
	grid-area: logo;
	${gridCenteringStyles}
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	padding: 10% 25%;
	p {
		margin-bottom: 0.6944vw;
	}
`;

const StyledLinks = styled.div`
	grid-area: links;
	${gridCenteringStyles}
	flex-direction: column;
	align-items: flex-start;
	padding: 0 25%;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => themes[theme]};
	margin-bottom: 0.2778vw;
	font-size: 1.1vw;
`;

const StyledMails = styled.div`
	grid-area: mails;
	${gridCenteringStyles}
	flex-direction: column;
	justify-content: space-around;
	padding: 10% 25%;

	a {
		text-decoration: none;
		color: ${({ theme }) => themes[theme]};
		font-weight: 700;
		font-size: 1.1vw;
	}
`;

const StyledMail = styled.div`
	p {
		margin-bottom: 0.4167vw;
		font-size: 1.1vw;
	}
`;

const StyledCopiright = styled.div`
	grid-area: copiright;
	${gridCenteringStyles}
	color: #77788C;
	padding: 0 25%;
	justify-content: flex-start;
	p {
		font-size: 0.8vw;
	}
`;

const StyledSocial = styled.div`
	grid-area: social;
	${gridCenteringStyles}
	justify-content: space-between;
	color: #77788c;
	padding: 0 20% 0 9%;
	p {
		font-size: 0.8vw;
	}
`;

// eslint-disable-next-line react/prop-types
export default function FooterBase({ theme = THEME.primary }, ref) {
	return (
		<StyledFooter ref={ref} theme={theme}>
			<StyledLogo>
				<p>CHRLY DSIGN LOGO</p>
				{/* <img src="" alt="CHRLY DSIGN LOGO" /> */}
				<p>Digital Multimedia Branding</p>
			</StyledLogo>
			<StyledLinks theme={theme}>
				<StyledLink theme={theme} to={paths.landing}>
					Home
				</StyledLink>
				<StyledLink theme={theme} to={paths.aboutUs}>
					About Us
				</StyledLink>
				<StyledLink theme={theme} to={paths.landingWorks}>
					Work
				</StyledLink>
				<StyledLink theme={theme} to={paths.aboutUsWhatwedo}>
					What we do
				</StyledLink>
				<StyledLink theme={theme} to={paths.landingEvolve}>
					Evolve
				</StyledLink>
				<StyledLink theme={theme} to={paths.landingAwards}>
					Awards
				</StyledLink>
			</StyledLinks>
			<StyledMails theme={theme}>
				<StyledMail>
					<p>Contact:</p>
					<a href="#">
						hello@chrlydsign.com
						{/* <img src="" alt="hello@chrlydsign.com" /> */}
					</a>
				</StyledMail>
				<StyledMail>
					<p>Collabs / Jobs:</p>
					<a href="#">
						talent@chrlydsign.com
						{/* <img src="" alt="talent@chrlydsign.com" /> */}
					</a>
				</StyledMail>
			</StyledMails>
			<StyledCopiright>
				<p>© All rigths reserved 2022, CHRLY DSIGN®</p>
			</StyledCopiright>
			<StyledSocial>
				<p>Follow on Instagram</p>
				<p>Web terms and conditions</p>
				<p>Privacy policy</p>
			</StyledSocial>
		</StyledFooter>
	);
}

export const Footer = forwardRef(FooterBase);
