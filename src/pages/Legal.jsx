/* eslint-disable react-hooks/exhaustive-deps */
import { useTheme } from "../styles/ThemeContext";
import { THEME } from "../utils/constants";
import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { TextSlice } from "../components/TextSlice";
import styled from "styled-components";
import { themes } from "../styles/themes";
import { TEXT_TYPE } from "../utils/constants";

const StyledLegal = styled.div`
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

export default function Legal() {
	//theme
	const { theme, selectTheme } = useTheme();
	useEffect(() => {
		selectTheme(THEME.primary);
	}, []);

	return (
		<StyledLegal theme={theme}>
			<StyleContainer>
				<StyledTitle>
					<TextSlice textStyles={TEXT_TYPE.h5Main}>Privacy Policy</TextSlice>
				</StyledTitle>
				<StyledInfoContainer>
					<StyledInfo>
						<TextSlice textStyles={TEXT_TYPE.mainText}>Last updated: 17 March 2023</TextSlice>
						<TextSlice textStyles={TEXT_TYPE.paragraph}>
							Our website values your privacy and wants to ensure that you understand what
							information we collect and how we use it. This Privacy Policy explains the types of
							personal information we collect, how we use it, and how we protect it. By using our
							website, you consent to the terms of this Privacy Policy.
						</TextSlice>
					</StyledInfo>
					<StyledInfo>
						<TextSlice textStyles={TEXT_TYPE.mainText}>Collection and Use</TextSlice>
						<TextSlice textStyles={TEXT_TYPE.paragraph}>
							When you use our website, we may collect certain information about you, including your
							name, email address, and other contact information. We may also collect information
							about your browsing behavior, including the pages you view, the links you click, and
							other actions you take on our website. We use this information to provide you with a
							better experience on our website, to improve our products and services, and to
							communicate with you about our offerings. We may also use your information to send you
							promotional materials or other information about our products and services.
						</TextSlice>
					</StyledInfo>
					<StyledInfo>
						<TextSlice textStyles={TEXT_TYPE.mainText}>Sharing and Disclosure</TextSlice>
						<TextSlice textStyles={TEXT_TYPE.paragraph}>
							We do not sell, rent, or otherwise share your personal information with third parties,
							except as necessary to provide our services or as required by law. We may share your
							information with our trusted partners or service providers, such as email marketing
							platforms, analytics providers, or payment processors, to help us deliver our services
							to you.
						</TextSlice>
					</StyledInfo>
					<StyledInfo>
						<TextSlice textStyles={TEXT_TYPE.mainText}>Security</TextSlice>
						<TextSlice textStyles={TEXT_TYPE.paragraph}>
							We take appropriate measures to protect the security of your personal information. We
							use industry-standard encryption technologies to protect your data during transmission
							and storage. However, no method of transmission over the Internet or electronic
							storage is 100% secure, and we cannot guarantee the absolute security of your
							information.
						</TextSlice>
					</StyledInfo>
					<StyledInfo>
						<TextSlice textStyles={TEXT_TYPE.mainText}>Changes to this Privacy Policy</TextSlice>
						<TextSlice textStyles={TEXT_TYPE.paragraph}>
							We reserve the right to modify or update this Privacy Policy at any time. We will
							notify you of any changes by posting the revised policy on our website. Your continued
							use of our website after any changes to this Privacy Policy indicates your acceptance
							of the new terms.
						</TextSlice>
					</StyledInfo>
					<StyledInfo>
						<TextSlice textStyles={TEXT_TYPE.mainText}>Contact Us</TextSlice>
						<TextSlice textStyles={TEXT_TYPE.paragraph}>
							If you have any questions about our Privacy Policy or how we handle your personal
							information, please contact us at hello@chrlydsign.com.
						</TextSlice>
					</StyledInfo>
				</StyledInfoContainer>
			</StyleContainer>
			<Footer theme={theme} />
		</StyledLegal>
	);
}
