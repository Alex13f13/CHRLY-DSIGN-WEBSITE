import styled from "styled-components";
import { themes } from "../styles/themes";
import { THEME } from "../utils/constants";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { paths } from "../router/paths";
import { colors } from "../styles/colors";
import white_logo from "../assets/white_logo.svg";
import black_logo from "../assets/black_logo.svg";
import { TextSlice } from "./TextSlice";
import { sendEmail } from "../utils/sendEmail";
import diagonalArrow from "../assets/diagonalArrow.svg";
import { openLink } from "../utils/openLink";

const StyledFooter = styled.section`
	${({ theme }) => themes[theme]}
	width: 100vw;
	display: grid;
	grid-template-columns: 50.69vw 23.44vw auto;
	grid-template-rows: 0.09vh 53vh 11.19vh;
	grid-template-areas:
		"bar bar bar"
		"logo links mails"
		"copiright social social";
	p {
		margin: 0;
	}
`;

const StyledBar = styled.div`
	grid-area: bar;
	border-top: 0.09vh solid ${colors.gray};
	width: 93.87vw;
	margin: 0 3.07vw;
`;

const StyledLogoContainer = styled.div`
	grid-area: logo;
	display: flex;
	flex-direction: column;
	padding: 10.03vh 0 0 8.97vw;
	gap: 1.43vh;
`;

const StyledLogo = styled.img`
	width: 12vw;
	height: 1.88vh;
	object-fit: contain;
`;

const StyledLinkContainer = styled.div`
	grid-area: links;
	display: flex;
	flex-direction: column;
	padding-top: 13.34vh;
	width: 30%;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => themes[theme]};
	padding-bottom: 0.36vh;
	font-weight: 300;
	font-size: 1.5vw;
	cursor: pointer;
`;

const StyledMailsContainer = styled.div`
	grid-area: mails;
	display: flex;
	flex-direction: column;
	padding-top: 13.34vh;
`;

const StyledMail = styled.div`
	padding-bottom: 4.57vh;
`;

const StyledMailTitle = styled.div`
	font-weight: 300;
	font-size: 1.27vw;
	padding-bottom: 0.63vh;
`;
const StyledMaillink = styled.p`
	color: ${({ theme }) => themes[theme]};
	font-weight: 500;
	font-size: 1.5vw;
	display: flex;
	cursor: pointer;
`;

const StyledIcon = styled.div`
	width: 1.04vw;
	height: 0.8vw;
	margin-left: 1.01vw;
	background-color: ${({ theme }) => (theme === THEME.primary ? colors.white : colors.black)};
	mask: ${({ icon }) => `url(${icon}) no-repeat center / contain`};
`;

const StyledCopiright = styled(Link)`
	text-decoration: none;
	grid-area: copiright;
	display: flex;
	color: ${colors.gray};
	padding-left: 8.97vw;
	font-weight: 300;
	font-size: 1.16vw;
	cursor: pointer;
`;

const StyledSocial = styled.div`
	grid-area: social;
	display: flex;
	gap: 5.67vw;
	p {
		font-weight: 300;
		font-size: 1.16vw;
		cursor: pointer;
		color: ${colors.gray};
	}
`;

const StyledSocialLink = styled(Link)`
	text-decoration: none;
	font-weight: 300;
	font-size: 1.16vw;
	cursor: pointer;
	color: ${colors.gray};
`;

// eslint-disable-next-line react/prop-types
export default function FooterBase({ theme = THEME.primary }, ref) {
	return (
		<StyledFooter ref={ref} theme={theme}>
			<StyledBar theme={theme} />
			<StyledLogoContainer>
				<StyledLogo
					src={theme === THEME.primary ? white_logo : black_logo}
					alt="CHRLY DSIGN LOGO"
				/>
				<TextSlice>Digital Multimedia Branding</TextSlice>
			</StyledLogoContainer>
			<StyledLinkContainer theme={theme}>
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
			</StyledLinkContainer>
			<StyledMailsContainer theme={theme}>
				<StyledMail>
					<StyledMailTitle>Contact:</StyledMailTitle>
					<StyledMaillink onClick={() => sendEmail("hello@chrlydsign.com")}>
						hello@chrlydsign.com <StyledIcon theme={theme} icon={diagonalArrow} />
					</StyledMaillink>
				</StyledMail>
				<StyledMail>
					<StyledMailTitle>Collabs / Jobs:</StyledMailTitle>
					<StyledMaillink onClick={() => sendEmail("talent@chrlydsign.com")}>
						talent@chrlydsign.com <StyledIcon theme={theme} icon={diagonalArrow} />
					</StyledMaillink>
				</StyledMail>
			</StyledMailsContainer>
			<StyledCopiright to={paths.legal}>© All rigths reserved 2022, CHRLY DSIGN®</StyledCopiright>
			<StyledSocial>
				<p onClick={() => openLink("https://instagram.com/chrly_dsign?igshid=OGQ5ZDc2ODk2ZA==")}>
					Follow on Instagram
				</p>
				<StyledSocialLink to={paths.legal}>Web terms and conditions</StyledSocialLink>
				<StyledSocialLink to={paths.legal}>Privacy policy</StyledSocialLink>
			</StyledSocial>
		</StyledFooter>
	);
}

export const Footer = forwardRef(FooterBase);
