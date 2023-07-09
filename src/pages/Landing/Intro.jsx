/* eslint-disable react/prop-types */
import styled from "styled-components";
import { TEXT_TYPE, ANIMATION } from "../../utils/constants";
import { ScrollableSection } from "../../components/ScrollableSection";
import { TextSlice } from "../../components/TextSlice";

const StyledIntro = styled.div`
	height: 100%;
	width: 100%;
`;

const StyledParagraphContainer = styled.div`
	margin-top: ${({ onlyParagraph }) => (onlyParagraph ? "29.54vh" : "37.96vh")};
	transition: margin-top 0.2s linear;
	margin-left: 9.03vw;
	width: 68vw;
`;

const StyledParagraphAnim = styled.div`
	animation: ${({ paragraphOnView }) => (paragraphOnView ? "out" : "in")} 0.8s forwards;
	@keyframes in {
		0% {
			transform: translateX(-100%);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}
	@keyframes out {
		0% {
			transform: translateX(0);
			opacity: 1;
		}
		100% {
			transform: translateX(-100%);
			opacity: 0;
		}
	}
`;

export default function Intro({ currentStep, steps }) {
	const paragraphOnView = currentStep !== 1 && currentStep !== 2;
	const onlyParagraph = currentStep !== 1;
	return (
		<StyledIntro>
			<StyledParagraphContainer onlyParagraph={onlyParagraph}>
				<StyledParagraphAnim paragraphOnView={paragraphOnView}>
					<TextSlice textStyles={TEXT_TYPE.mainText}>
						Welcome to CHRLY DSIGN, the award winning Digital Multimedia Branding agency that makes
						digital brands evolve so much, their big dreams become tiny.
					</TextSlice>
				</StyledParagraphAnim>
			</StyledParagraphContainer>
			<ScrollableSection
				texts={["BRANDING ", "DESIGN", "MOTION", "IDENTIFY", "INTERFACE", "EVOLUTION"]}
				textStyles={TEXT_TYPE.h2Main}
				currentStep={currentStep}
				scrollSteps={steps}
				animSectIn={ANIMATION.fadeIn}
				animSectOut={ANIMATION.fadeOut}
				sectionStyles={{
					width: "100%",
					paddingLeft: "8vw",
					paddingTop: "8.59vh",
				}}
				textExtraStyles={{
					marginRight: "1.5%",
				}}
			>
				<div style={{ flex: "0 0 auto", marginLeft: "15%", marginRight: "15%" }}></div>
			</ScrollableSection>
		</StyledIntro>
	);
}
