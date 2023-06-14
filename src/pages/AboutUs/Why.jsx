/* eslint-disable react/prop-types */
import styled from "styled-components";
import { TEXT_TYPE, ANIMATION } from "../../utils/constants";
import { TextSlice } from "../../components/TextSlice";
import { ScrollableSection } from "../../components/ScrollableSection";

const StyledWhy = styled.div``;

export default function Why({ currentStep, steps }) {
	return (
		<StyledWhy>
			<TextSlice textStyles={TEXT_TYPE.title}>WHY</TextSlice>
			<TextSlice
				textStyles={TEXT_TYPE.title}
				sliceActive={currentStep >= 8}
				animIn={ANIMATION.fadeIn}
				animOut={ANIMATION.fadeOut}
			>
				??
			</TextSlice>
			<TextSlice
				textStyles={TEXT_TYPE.title}
				sliceActive={currentStep === 9}
				animIn={ANIMATION.fadeIn}
				animOut={ANIMATION.fadeOut}
			>
				{currentStep === 9 ? "???????" : null}
			</TextSlice>
			<ScrollableSection
				texts={[
					"“Because I know what it is to have a dream that nobody understands; how it feels in the stomach when you do everything in your power to go after it, but things just seem to go against you. I understand all those nights without sleep and long stares at the wall trying to figure out what to do. I do, because just like you, I also started with a dream...",
					"The dream of creating things that could add to people’s lives, leaving a mark in this world; proving to myself that a nerdy kid that always fantasized about his future, could become something more than a bunch of impossible aspirations and broken dreams… ",
					"So it is because I understand the huge sacrifice it takes to pursue your dream life, that I want to use my creative abilities and acquired knowledge to provide digital brands in the same situation, with tools that can actually help them achieve theirs.”",
				]}
				textStyles={TEXT_TYPE.description}
				currentStep={currentStep}
				activeSection={steps.includes(currentStep)}
				animIn={ANIMATION.fadeIn}
				animOut={ANIMATION.fadeOut}
			/>
		</StyledWhy>
	);
}
