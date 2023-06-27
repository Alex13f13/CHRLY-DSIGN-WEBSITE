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

const StyledCookies = styled.div`
	${({ theme }) => themes[theme]}
`;

const StyleContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: start;
	justify-content: center;
`;

const StyledTitle = styled.div`
	position: sticky;
	top: 100px;
	width: 30%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledInfoContainer = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const StyledInfo = styled.div`
	width: 100%;
	max-width: 800px;
	margin: 0 0 2rem 0;
	padding: 0 1rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`;

export default function Cookies() {
	const { theme, selectTheme } = useTheme();
	useEffect(() => {
		selectTheme(THEME.primary);
	}, []);

	return (
		<StyledCookies theme={theme}>
			<StyleContainer>
				<StyledTitle>
					<TextSlice textStyles={TEXT_TYPE.title}>Cookies Policy</TextSlice>
				</StyledTitle>
				<StyledInfoContainer>
					<StyledInfo>
						<TextSlice textStyles={TEXT_TYPE.subtitle}>Last updated: 17 March 2023</TextSlice>
						<TextSlice textStyles={TEXT_TYPE.description}>
							CHRLY DSIGN® uses cookies on www.chrlydsign.com. By using the website, you consent to
							the use of cookies. Our Cookies Policy explains what cookies are, how we use cookies,
							how third-parties we may partner with may use cookies on the website, your choices
							regarding cookies and further information about cookies.
						</TextSlice>
					</StyledInfo>
					<StyledInfo>
						<TextSlice textStyles={TEXT_TYPE.subtitle}>What are cookies</TextSlice>
						<TextSlice textStyles={TEXT_TYPE.description}>
							Cookies are small pieces of text sent by your web browser by a website you visit. A
							cookie file is stored in your web browser and allows the Service or a third-party to
							recognize you and make your next visit easier and the Service more useful to you.
							Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your
							personal computer or mobile device when you go offline, while session cookies are
							deleted as soon as you close your web browser.
						</TextSlice>
					</StyledInfo>
					<StyledInfo>
						<TextSlice textStyles={TEXT_TYPE.subtitle}>How we use cookies</TextSlice>
						<TextSlice textStyles={TEXT_TYPE.description}>
							When you use and access the Service, we may place a number of cookies files in your
							web browser. We use cookies for the following purposes: · To enable certain functions
							of the Service · To provide analytics · To store your preferences · To enable
							advertisements delivery, including behavioral advertising · We use both session and
							persistent cookies on the Service and we use different types of cookies to run the
							Service: Essential cookies: These cookies are required for the website to function
							properly. Analytics cookies: These cookies help us understand how users interact with
							the website and improve its performance. Advertising cookies: These cookies are used
							to personalize advertisements based on your browsing behavior.
						</TextSlice>
					</StyledInfo>
					<StyledInfo>
						<TextSlice textStyles={TEXT_TYPE.subtitle}>Third-Party Cookies</TextSlice>
						<TextSlice textStyles={TEXT_TYPE.description}>
							In addition to our own cookies, we may also use various third-parties cookies to
							report usage statistics of the Service, deliver advertisements on and through the
							Service, and so on.
						</TextSlice>
					</StyledInfo>
					<StyledInfo>
						<TextSlice textStyles={TEXT_TYPE.subtitle}>
							What are your choices regarding cookies
						</TextSlice>
						<TextSlice textStyles={TEXT_TYPE.description}>
							If you'd like to delete cookies or instruct your web browser to delete or refuse
							cookies, please visit the help pages of your web browser. Please note, however, that
							if you delete cookies or refuse to accept them, you might not be able to use all of
							the features we offer, you may not be able to store your preferences, and some of our
							pages might not display properly. For the Chrome web browser, please visit this page
							from Google: https://support.google.com/accounts/answer/32050 For the Internet
							Explorer web browser, please visit this page from Microsoft:
							http://support.microsoft.com/kb/278835 For the Firefox web browser, please visit this
							page from Mozilla:
							https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored For
							the Safari web browser, please visit this page from Apple:
							https://support.apple.com/kb/PH21411?locale=en_US You can learn more about cookies and
							the following third-party websites: AllAboutCookies: http://www.allaboutcookies.org/
							Network Advertising Initiative: http://www.networkadvertising.org/
						</TextSlice>
					</StyledInfo>
				</StyledInfoContainer>
			</StyleContainer>
			<Footer theme={theme} />
		</StyledCookies>
	);
}
