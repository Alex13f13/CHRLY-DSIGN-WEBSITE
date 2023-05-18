/* eslint-disable react-hooks/exhaustive-deps */
import { Section } from "../components/Section";
import { useTheme } from "../styles/ThemeContext";
import { THEME, TEXT_TYPE, ANIMATION } from "../utils/constants";
import { useEffect, useRef } from "react";

import {
	StyledAboutUs,
	StyledWhatWeDo,
	StyledBackbone,
	StyledMision,
	StyledWhy,
	StyledDifferent,
	StyledStandFor,
} from "../styles/AboutUsStyle";
import { ScrollableSection } from "../components/ScrollableSection";
import { Footer } from "../components/Footer";
import { useWeel } from "../utils/useWeel";
import { TextSlice } from "../components/TextSlice";

export default function AboutUs() {
	const { theme, selectTheme } = useTheme();
	const steps = [
		useRef(null), // 0
		useRef(null), // 1
		useRef(null), // 2
		useRef(null), // 3
		useRef(null), // 4
		useRef(null), // 5
		useRef(null), // 6
		useRef(null), // 7
		useRef(null), // 8
		useRef(null), // 9
		useRef(null), // 10
		useRef(null), // 11
		useRef(null), // 12
		useRef(null), // 13
		useRef(null), // 14
		useRef(null), // 15
		useRef(null), // 16
		useRef(null), // 17
		useRef(null), // 18
	];
	const { handleWheel, stepsRefs, currentStep } = useWeel(steps);
	const whiteSections = [1, 2, 3, 4, 5];

	const blackboneSections = [2, 3, 4, 5];
	const whySections = [10, 11, 12];
	const standForSections = [14, 15, 16, 17];
	useEffect(() => {
		if (whiteSections.includes(currentStep)) selectTheme(THEME.secondary);
		else selectTheme(THEME.primary);
	}, [currentStep]);

	return (
		<div onWheel={handleWheel}>
			<Section theme={theme} ref={stepsRefs[0]}>
				<StyledAboutUs>
					<TextSlice textStyles={TEXT_TYPE.description}>
						CHRLY DSIGN® is a high-end design & branding agency specialized in Digital Brands.
					</TextSlice>
				</StyledAboutUs>
			</Section>
			<Section theme={theme} ref={stepsRefs[1]}>
				<StyledWhatWeDo>
					<TextSlice textStyles={TEXT_TYPE.description}>
						If you’re looking for usual brand stuff this is not the place. We provide creative
						innovation for companies that seek to step into the future, push their limits and
						evolve. These are our beliefs:
					</TextSlice>
				</StyledWhatWeDo>
			</Section>
			<Section
				theme={theme}
				ref={(node) => (
					(stepsRefs[2].current = node),
					(stepsRefs[3].current = node),
					(stepsRefs[4].current = node),
					(stepsRefs[5].current = node)
				)}
			>
				<StyledBackbone>
					<TextSlice textStyles={TEXT_TYPE.title}>Backbone concepts</TextSlice>
					<ScrollableSection
						texts={["DIGITAL BRANDS", "MOTION", "PREMIUM DESIGN", "INNER SOUL"]}
						textStyles={TEXT_TYPE.title}
						currentStep={currentStep}
						activeSection={blackboneSections.includes(currentStep)}
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
						activeSection={blackboneSections.includes(currentStep)}
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
						activeSection={blackboneSections.includes(currentStep)}
						animIn={ANIMATION.fadeIn}
						animOut={ANIMATION.fadeOut}
					/>
				</StyledBackbone>
			</Section>
			<Section theme={theme} ref={stepsRefs[6]}>
				<StyledMision>
					<TextSlice textStyles={TEXT_TYPE.title}>Mision</TextSlice>
					<TextSlice textStyles={TEXT_TYPE.description} sliceActive={currentStep === 6}>
						Our mission is to help Digital Brands step up, evolving till they become the ultimate
						version of themselves and achieve the results they always dreamed of.
					</TextSlice>
				</StyledMision>
			</Section>
			<Section
				theme={theme}
				ref={(node) => (
					(stepsRefs[7].current = node),
					(stepsRefs[8].current = node),
					(stepsRefs[9].current = node),
					(stepsRefs[10].current = node),
					(stepsRefs[11].current = node),
					(stepsRefs[12].current = node)
				)}
			>
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
						activeSection={whySections.includes(currentStep)}
						animIn={ANIMATION.fadeIn}
						animOut={ANIMATION.fadeOut}
					/>
				</StyledWhy>
			</Section>
			<Section theme={theme} ref={stepsRefs[13]}>
				<StyledDifferent>
					<TextSlice textStyles={TEXT_TYPE.description}>
						What makes us different is our pure motivation to innovate and provide value. The honest
						drive of serving your cause to achieve your dream results, even if that would mean
						having to step aside and tell you we are not the best fit for the job.
					</TextSlice>
				</StyledDifferent>
			</Section>
			<Section
				theme={theme}
				ref={(node) => (
					(stepsRefs[14].current = node),
					(stepsRefs[15].current = node),
					(stepsRefs[16].current = node),
					(stepsRefs[17].current = node)
				)}
			>
				<StyledStandFor>
					<TextSlice textStyles={TEXT_TYPE.title}>WE STAND FOR</TextSlice>
					<ScrollableSection
						texts={["EVOLUTION /", "PERSEVERANCE /", "AMBITION /", "MODESTY /"]}
						textStyles={TEXT_TYPE.subtitle}
						currentStep={currentStep}
						activeSection={standForSections.includes(currentStep)}
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
						activeSection={standForSections.includes(currentStep)}
						animIn={ANIMATION.fadeIn}
						animOut={ANIMATION.fadeOut}
					/>
				</StyledStandFor>
			</Section>
			<Footer theme={theme} ref={stepsRefs[18]} />
		</div>
	);
}
