/* eslint-disable react/prop-types */
import styled from "styled-components";
import { TEXT_TYPE, ANIMATION } from "../../utils/constants";
import { ScrollableSection } from "../../components/ScrollableSection";
import { TextSlice } from "../../components/TextSlice";

const StyledIntro = styled.div`
	height: 100%;
	width: 100%;
`;

export default function Intro({ currentStep, steps }) {
	return (
		<StyledIntro>
			<TextSlice
				textStyles={TEXT_TYPE.subtitle}
				textExtraStyles={{
					height: "40%",
					marginLeft: "10%",
					width: "48%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				Welcome to CHRLY DSIGN, the award winning Digital Multimedia Branding agency that makes
				digital brands evolve so much, their big dreams become tiny.
			</TextSlice>
			<ScrollableSection
				texts={["BRANDING ", "DESIGN", "MOTION", "IDENTIFY", "INTERFACE", "EVOLUTION"]}
				textStyles={TEXT_TYPE.superTitle}
				currentStep={currentStep}
				activeSection={steps.includes(currentStep)}
				animSectIn={ANIMATION.fadeIn}
				animSectOut={ANIMATION.fadeOut}
				sectionStyles={{
					width: "400%",
					overflow: "hidden",
					height: "40%",
					marginLeft: "10%",
				}}
				textExtraStyles={{
					marginRight: "0.5%",
				}}
			/>
		</StyledIntro>
	);
}
