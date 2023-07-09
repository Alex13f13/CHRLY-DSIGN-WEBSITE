/* eslint-disable react/prop-types */
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
import { sendEmail } from "../utils/sendEmail";
import useAnimeOnView from "../utils/useAnimeOnView";
import { Section } from "../components/Section";

const StyledLegal = styled.div`
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
	width: 28.5vw;
	height: 10.5vh;
`;

const StyledInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 60.52vh;
	padding-left: 5.09vw;
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

const StyledLink = styled.span`
	font-weight: 500;
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

export default function Legal() {
	const { theme, selectTheme } = useTheme();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		selectTheme(THEME.primary);
	}, []);

	return (
		<StyledLegal theme={theme}>
			<Section>
				<StyleTitle>
					<TextSlice textStyles={TEXT_TYPE.h1Medium}>
						<StyledAnimTitle>Privacy Policy</StyledAnimTitle>
					</TextSlice>
				</StyleTitle>
			</Section>
			<StyleContainer>
				<StyledSubTitle>
					<TextSlice textStyles={TEXT_TYPE.h5Main}>
						<AnimatedDiv>Privacy Policy</AnimatedDiv>
					</TextSlice>
				</StyledSubTitle>
				<StyledInfoContainer>
					<AnimatedDiv>
						<StyledInfo>
							<TextSlice textStyles={TEXT_TYPE.h6Main}>Last updated: 17 March 2023</TextSlice>
							<TextSlice textStyles={TEXT_TYPE.paragraph}>
								Our website values your privacy and wants to ensure that you understand what
								information we collect and how we use it. This Privacy Policy explains the types of
								personal information we collect, how we use it, and how we protect it. By using our
								website, you consent to the terms of this Privacy Policy.
							</TextSlice>
						</StyledInfo>
						<StyledBar theme={theme} />
						<StyledInfo>
							<TextSlice textStyles={TEXT_TYPE.h6Main}>Collection and Use</TextSlice>
							<TextSlice textStyles={TEXT_TYPE.paragraph}>
								<p>
									When you use our website, we may collect certain information about you, including
									your name, email address, and other contact information. We may also collect
									information about your browsing behavior, including the pages you view, the links
									you click, and other actions you take on our website.
								</p>
								<p>
									We use this information to provide you with a better experience on our website, to
									improve our products and services, and to communicate with you about our
									offerings. We may also use your information to send you promotional materials or
									other information about our products and services.
								</p>
							</TextSlice>
						</StyledInfo>
						<StyledInfo>
							<TextSlice textStyles={TEXT_TYPE.h6Main}>Sharing and Disclosure</TextSlice>
							<TextSlice textStyles={TEXT_TYPE.paragraph}>
								We do not sell, rent, or otherwise share your personal information with third
								parties, except as necessary to provide our services or as required by law. We may
								share your information with our trusted partners or service providers, such as email
								marketing platforms, analytics providers, or payment processors, to help us deliver
								our services to you.
							</TextSlice>
						</StyledInfo>
						<StyledInfo>
							<TextSlice textStyles={TEXT_TYPE.h6Main}>Security</TextSlice>
							<TextSlice textStyles={TEXT_TYPE.paragraph}>
								We take appropriate measures to protect the security of your personal information.
								We use industry-standard encryption technologies to protect your data during
								transmission and storage. However, no method of transmission over the Internet or
								electronic storage is 100% secure, and we cannot guarantee the absolute security of
								your information.
							</TextSlice>
						</StyledInfo>
						<StyledInfo>
							<TextSlice textStyles={TEXT_TYPE.h6Main}>Changes to this Privacy Policy</TextSlice>
							<TextSlice textStyles={TEXT_TYPE.paragraph}>
								We reserve the right to modify or update this Privacy Policy at any time. We will
								notify you of any changes by posting the revised policy on our website. Your
								continued use of our website after any changes to this Privacy Policy indicates your
								acceptance of the new terms.
							</TextSlice>
						</StyledInfo>
						<StyledBar theme={theme} />
						<StyledInfo>
							<TextSlice textStyles={TEXT_TYPE.h6Main}>Contact Us</TextSlice>
							<TextSlice textStyles={TEXT_TYPE.paragraph}>
								If you have any questions about our Privacy Policy or how we handle your personal
								information, please contact us at{" "}
								<StyledLink onClick={() => sendEmail("hello@chrlydsign.com")}>
									hello@chrlydsign.com
								</StyledLink>
							</TextSlice>
						</StyledInfo>
					</AnimatedDiv>
				</StyledInfoContainer>
			</StyleContainer>
			<Footer theme={theme} />
		</StyledLegal>
	);
}
