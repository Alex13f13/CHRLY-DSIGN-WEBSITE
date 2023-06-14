/* eslint-disable react/prop-types */
import styled from "styled-components";
import ScrollableSection from "../../components/ScrollableSection";
import { TEXT_TYPE } from "../../components/TextSlice";
import { ANIMATION } from "../../utils/constants";
import TextSlice from "../../components/TextSlice";

const StyledBackbone = styled.div``;

export default function Backbone({ currentStep, steps }) {
	return (
		<StyledBackbone>
			<TextSlice textStyles={TEXT_TYPE.title}>Backbone concepts</TextSlice>
			<ScrollableSection
				texts={["DIGITAL BRANDS", "MOTION", "PREMIUM DESIGN", "INNER SOUL"]}
				textStyles={TEXT_TYPE.title}
				currentStep={currentStep}
				activeSection={steps.includes(currentStep)}
				animIn={ANIMATION.none}
				animOut={ANIMATION.none}
			/>
			<ScrollableSection
				texts={[
					"Backbone concept 1 / 4",
					"Backbone concept 2 / 4",
					"Backbone concept 3 / 4",
					"Backbone concept 4 / 4",
				]}
				textStyles={TEXT_TYPE.description}
				currentStep={currentStep}
				activeSection={steps.includes(currentStep)}
				animIn={ANIMATION.fadeIn}
				animOut={ANIMATION.fadeOut}
			/>
			<ScrollableSection
				texts={[
					"There are too many Digital Brands trapped under traditional concepts of brand and design. Concepts created when the only way was printing and carrying a screen in your pocket was a Sci-Fy thing. Principles that when put against the nature of the digital world can’t hold up, but keep being used just because it is easier to keep doing things the same old way than to sit down and rack your brains trying to come up with something new.",
					"Digital means motion, and motion means alive. Greatest thing about the Digital World is the ability to break the boundaries between content and audience allowing the content to flow, adapt to different situations, interact with people, be in multiple places at once… Allowing it to be Alive. Definitely something to go for when creating a living brand.",
					"They say good design is invisible... We say good design is something you can’t live without once you experience it. There’s nothing like falling in love with a brand every time you see her. To provide the highest-end creative and visually attractive results, we don’t design “for” digital environments but “from” digital environments.",
					"Every brand has a story that begins with passion, keeps the light on in the darkest moments and gives the drive to chase those impossible dreams. An inspiring story hidden in the dark waiting for the right way to shine through. We wanna help you tell that story and become part of people's lives.",
				]}
				textStyles={TEXT_TYPE.description}
				currentStep={currentStep}
				activeSection={steps.includes(currentStep)}
				animIn={ANIMATION.fadeIn}
				animOut={ANIMATION.fadeOut}
			/>
		</StyledBackbone>
	);
}
