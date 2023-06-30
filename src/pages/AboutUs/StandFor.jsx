/* eslint-disable react/prop-types */
import styled from "styled-components";
import { TEXT_TYPE, ANIMATION } from "../../utils/constants";
import { TextSlice } from "../../components/TextSlice";
import { ScrollableSection } from "../../components/ScrollableSection";

const StyledStandFor = styled.div``;

export default function StandFor({ currentStep, steps }) {
	return (
		<StyledStandFor>
			<TextSlice textStyles={TEXT_TYPE.title}>WE STAND FOR</TextSlice>
			<ScrollableSection
				texts={["EVOLUTION /", "PERSEVERANCE /", "AMBITION /", "MODESTY /"]}
				textStyles={TEXT_TYPE.subtitle}
				currentStep={currentStep}
				scrollSteps={steps}
				animIn={ANIMATION.fadeIn}
				animOut={ANIMATION.fadeOut}
			/>
			<ScrollableSection
				texts={[
					"There’s always room to improve, learn, grow & innovate.",
					"No matter how steep or dark the path gets. Keep pushing. You owe it to your younger self who started the journey.",
					"Dream big or do not dream at all. Go big or go home.",
					"Only focus on helping and doing good for people. No hidden intentions.",
				]}
				textStyles={TEXT_TYPE.description}
				currentStep={currentStep}
				scrollSteps={steps}
				animIn={ANIMATION.fadeIn}
				animOut={ANIMATION.fadeOut}
			/>
		</StyledStandFor>
	);
}
