/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import { useTheme } from "../styles/ThemeContext";
import { THEME } from "../utils/constants";
import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { TextSlice } from "../components/TextSlice";
import styled from "styled-components";
import { themes } from "../styles/themes";
import { TEXT_TYPE } from "../utils/constants";
import { colors } from "../styles/colors";
import { openLink } from "../utils/openLink";
import useAnimeOnView from "../utils/useAnimeOnView";
import { Section } from "../components/Section";

const StyledCookies = styled.div`
	${({ theme }) => themes[theme]}
`;

const StyleTitle = styled.div`
	width: 53.76vw;
	margin-top: 9.54vh;
	margin-left: 7.64vw;
`;

const StyleContainer = styled.div`
	width: 100%;
	display: flex;
	padding-bottom: 48.08vh;
`;

const StyledSubTitle = styled.div`
	position: sticky;
	display: flex;
	top: 10vh;
	padding-top: 35.27vh;
	padding-left: 9.03vw;
	width: 17.42vw;
	height: 19.04vh;
`;

const StyledInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 60.52vh;
	padding-left: 15.91vw;
	gap: 10.74vh;
`;

const StyledInfo = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	max-width: 48.61vw;
	gap: 3.13vh;
`;

const StyledBar = styled.div`
	border-top: 0.09vh solid ${colors.gray};
	width: 100%;
`;

const StyledLink = styled.div`
	color: ${colors.gray};
	cursor: pointer;
`;

const StyledLink2 = styled.span`
	color: ${colors.gray};
	cursor: pointer;
`;

const StyledAnimTitle = styled.div`
	animation: slide-in 1s forwards;
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

const StyledDiv = styled.div`
	opacity: ${({ isvisible }) => isvisible};
	transition: opacity 1s linear;
`;

function AnimatedDiv({ children }) {
	const [isVisible, elementRef] = useAnimeOnView(0);
	return (
		<StyledDiv isvisible={isVisible ? "1" : "0"} ref={elementRef}>
			{children}
		</StyledDiv>
	);
}

export default function Cookies() {
	const { theme, selectTheme } = useTheme();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		selectTheme(THEME.primary);
	}, []);

	return (
		<StyledCookies theme={theme}>
			<Section>
				<StyleTitle>
					<TextSlice textStyles={TEXT_TYPE.h1Medium}>
						<StyledAnimTitle>Cookies Policy</StyledAnimTitle>
					</TextSlice>
				</StyleTitle>
			</Section>
			<StyleContainer>
				<StyledSubTitle>
					<TextSlice textStyles={TEXT_TYPE.h5Main}>
						<AnimatedDiv>Cookies Policy</AnimatedDiv>
					</TextSlice>
				</StyledSubTitle>
				<StyledInfoContainer>
					<AnimatedDiv>
						<StyledInfo>
							<TextSlice textStyles={TEXT_TYPE.h6Main}>Last updated: 17 March 2023</TextSlice>
							<TextSlice textStyles={TEXT_TYPE.paragraph}>
								CHRLY DSIGN® uses cookies on www.chrlydsign.com. By using the website, you consent
								to the use of cookies. Our Cookies Policy explains what cookies are, how we use
								cookies, how third-parties we may partner with may use cookies on the website, your
								choices regarding cookies and further information about cookies.
							</TextSlice>
						</StyledInfo>
						<StyledBar theme={theme} />
						<StyledInfo>
							<TextSlice textStyles={TEXT_TYPE.h6Main}>What are cookies</TextSlice>
							<TextSlice textStyles={TEXT_TYPE.paragraph}>
								<p>
									Cookies are small pieces of text sent by your web browser by a website you visit.
									A cookie file is stored in your web browser and allows the Service or a
									third-party to recognize you and make your next visit easier and the Service more
									useful to you.
								</p>
								<p>
									Cookies can be "persistent" or "session" cookies. Persistent cookies remain on
									your personal computer or mobile device when you go offline, while session cookies
									are deleted as soon as you close your web browser.
								</p>
							</TextSlice>
						</StyledInfo>
						<StyledInfo>
							<TextSlice textStyles={TEXT_TYPE.h6Main}>How we use cookies</TextSlice>
							<TextSlice textStyles={TEXT_TYPE.paragraph}>
								<p>
									When you use and access the Service, we may place a number of cookies files in
									your web browser.
								</p>
								<p>We use cookies for the following purposes:</p>
								<p>
									· To enable certain functions of the Service
									<br />· To provide analytics
									<br />· To store your preferences
									<br />· To enable advertisements delivery, including behavioral advertising
									<br />· We use both session and persistent cookies on the Service and we use
									different types of cookies to run the Service:
								</p>
								<p>
									<strong>Essential cookies:</strong> These cookies are required for the website to
									function properly.
								</p>
								<p>
									<strong>Analytics cookies:</strong> These cookies help us understand how users
									interact with the website and improve its performance.
								</p>
								<p>
									<strong>Advertising cookies:</strong> These cookies are used to personalize
									advertisements based on your browsing behavior.
								</p>
							</TextSlice>
						</StyledInfo>
						<StyledInfo>
							<TextSlice textStyles={TEXT_TYPE.h6Main}>Third-Party Cookies</TextSlice>
							<TextSlice textStyles={TEXT_TYPE.paragraph}>
								In addition to our own cookies, we may also use various third-parties cookies to
								report usage statistics of the Service, deliver advertisements on and through the
								Service, and so on.
							</TextSlice>
						</StyledInfo>
						<StyledBar theme={theme} />
						<StyledInfo>
							<TextSlice textStyles={TEXT_TYPE.h6Main}>
								What are your choices regarding cookies
							</TextSlice>
							<TextSlice textStyles={TEXT_TYPE.paragraph}>
								If you'd like to delete cookies or instruct your web browser to delete or refuse
								cookies, please visit the help pages of your web browser. Please note, however, that
								if you delete cookies or refuse to accept them, you might not be able to use all of
								the features we offer, you may not be able to store your preferences, and some of
								our pages might not display properly.
								<p>
									For the Chrome web browser, please visit this page from Google:
									<StyledLink
										onClick={() => openLink("https://support.google.com/accounts/answer/32050")}
									>
										https://support.google.com/accounts/answer/32050
									</StyledLink>
								</p>
								<p>
									For the Internet Explorer web browser, please visit this page from Microsoft:
									<StyledLink onClick={() => openLink("http://support.microsoft.com/kb/278835")}>
										http://support.microsoft.com/kb/278835
									</StyledLink>
								</p>
								<p>
									For the Firefox web browser, please visit this page from Mozilla:
									<StyledLink
										onClick={() =>
											openLink(
												"https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
											)
										}
									>
										https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
									</StyledLink>
								</p>
								<p>
									For the Safari web browser, please visit this page from Apple:
									<StyledLink
										onClick={() => openLink("https://support.apple.com/kb/PH21411?locale=en_US")}
									>
										https://support.apple.com/kb/PH21411?locale=en_US
									</StyledLink>
								</p>
								<p>You can learn more about cookies and the following third-party websites:</p>
								<p>
									AllAboutCookies:{" "}
									<StyledLink2 onClick={() => openLink("http://www.allaboutcookies.org/")}>
										http://www.allaboutcookies.org/
									</StyledLink2>
								</p>
								<p>
									Network Advertising Initiative:{" "}
									<StyledLink2 onClick={() => openLink("http://www.networkadvertising.org/")}>
										http://www.networkadvertising.org/
									</StyledLink2>
								</p>
							</TextSlice>
						</StyledInfo>
					</AnimatedDiv>
				</StyledInfoContainer>
			</StyleContainer>
			<Footer theme={theme} />
		</StyledCookies>
	);
}
