/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { TEXT_TYPE, ANIMATION } from "../../utils/constants";
import { ScrollableIntroSection } from "../../components/Landing/ScrollableIntroSection";
import { TextSlice } from "../../components/TextSlice";
import { useState, useEffect } from "react";

const StyledIntro = styled.div`
	height: 100%;
	width: 100%;
`;

const StyledParagraphContainer = styled.div`
	margin-top: ${({ onlyParagraph, isRenderedIntro }) =>
		isRenderedIntro ? (onlyParagraph ? "29.54vh" : "37.96vh") : 0};
	transition: margin-top 0.2s linear;
	margin-left: 9.03vw;
	width: 68vw;
`;

const StyledParagraph2Container = styled.div`
	margin-top: 7.61vh;
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

const StyledParagraphAnim2 = styled.div`
	animation: ${({ paragraphOnView2 }) => (!paragraphOnView2 ? "out2" : "in2")} 0.8s forwards;
	@keyframes in2 {
		0% {
			transform: translateY(100%);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes out2 {
		0% {
			transform: translateY(0);
			opacity: 1;
		}
		100% {
			transform: translateY(100%);
			opacity: 0;
		}
	}
`;

export default function Intro({ currentStep, steps }) {
	const paragraphOnView = currentStep !== 1 && currentStep !== 2;
	const onlyParagraph = currentStep !== 1;
	const introOnView = steps.intro[steps.intro.length - 1] > currentStep - 1;
	const offerOnView = steps.offer.includes(currentStep);
	// const scrollSteps = [...steps.intro, ...steps.offer];

	const [isRenderedIntro, setIsRenderedIntro] = useState(true);
	const [isRenderedOffer, setIsRenderedOffer] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsRenderedIntro(introOnView);
			setIsRenderedOffer(offerOnView);
		}, 200);

		return () => clearTimeout(timer);
	}, [currentStep]);

	return (
		<StyledIntro>
			<StyledParagraphContainer onlyParagraph={onlyParagraph} isRenderedIntro={isRenderedIntro}>
				<StyledParagraphAnim paragraphOnView={paragraphOnView}>
					{isRenderedIntro && (
						<TextSlice textStyles={TEXT_TYPE.mainText}>
							Welcome to CHRLY DSIGN, the award winning Digital Multimedia Branding agency that
							makes digital brands evolve so much, their big dreams become tiny.
						</TextSlice>
					)}
				</StyledParagraphAnim>
			</StyledParagraphContainer>
			<ScrollableIntroSection
				texts={["BRANDING ", "DESIGN", "MOTION", "IDENTIFY", "INTERFACE", "EVOLUTION"]}
				textStyles={TEXT_TYPE.h2Main}
				currentStep={currentStep}
				scrollSteps={steps.intro}
				lastSteps={steps.offer}
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
			/>
			<StyledParagraph2Container>
				<StyledParagraphAnim2 paragraphOnView2={offerOnView}>
					{isRenderedOffer && (
						<TextSlice textStyles={TEXT_TYPE.mainText}>
							Digital Brands are the future in the now. Why then use the same approach of the last
							80 years? By understanding their true nature, we provide the ultimate digital brand
							push that will get them on the path to their dream results.
						</TextSlice>
					)}
				</StyledParagraphAnim2>
			</StyledParagraph2Container>
		</StyledIntro>
	);
}
