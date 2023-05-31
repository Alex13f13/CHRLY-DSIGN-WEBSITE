import styled from "styled-components";
import { themes } from "../styles/themes";
import { THEME } from "../utils/constants";
import { forwardRef } from "react";

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
		margin-bottom: 10px;
	}
`;

const StyledLinks = styled.div`
	grid-area: links;
	${gridCenteringStyles}
	flex-direction: column;
	align-items: flex-start;
	padding: 0 25%;

	a {
		text-decoration: none;
		color: ${({ theme }) => themes[theme]};
		margin-bottom: 4px;
	}
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
	}
`;

const StyledMail = styled.div`
	p {
		margin-bottom: 6px;
	}
`;

const StyledCopiright = styled.div`
	grid-area: copiright;
	${gridCenteringStyles}
	color: #77788C;
`;

const StyledSocial = styled.div`
	grid-area: social;
	${gridCenteringStyles}
	justify-content: space-around;
	color: #77788c;
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
				<a href="#">Home</a>
				<a href="#">What we do</a>
				<a href="#">About us</a>
				<a href="#">Evolve</a>
				<a href="#">Work</a>
				<a href="#">Awards</a>
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
