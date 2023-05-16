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

export default function AboutUs() {
	const { theme, selectTheme } = useTheme();
	const refs = [
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
	];
	const { handleWheel, sectionRefs, currentSection } = useWeel(refs);
	const whiteSections = [1, 2];
	useEffect(() => {
		if (whiteSections.includes(currentSection)) selectTheme(THEME.secondary);
		else selectTheme(THEME.primary);
	}, [currentSection]);

	return (
		<div onWheel={handleWheel}>
			<Section theme={theme} ref={sectionRefs[0]}>
				<StyledAboutUs>
					<p>CHRLY DSIGN® is a high-end design & branding agency specialized in Digital Brands.</p>
				</StyledAboutUs>
			</Section>
			<Section theme={theme} ref={sectionRefs[1]}>
				<StyledWhatWeDo>
					<p>
						If you’re looking for usual brand stuff this is not the place. We provide creative
						innovation for companies that seek to step into the future, push their limits and
						evolve. These are our beliefs:
					</p>
				</StyledWhatWeDo>
			</Section>
			<Section theme={theme} ref={sectionRefs[2]}>
				<StyledBackbone>
					<h1>Backbone concepts</h1>
					<ScrollableSection
						texts={["DIGITAL BRANDS", "MOTION", "PREMIUM DESIGN", "INNER SOUL"]}
						textStyles={TEXT_TYPE.title}
					/>
					<ScrollableSection
						texts={[
							"Backbone concept 1 / 4",
							"Backbone concept 2 / 4",
							"Backbone concept 3 / 4",
							"Backbone concept 4 / 4",
						]}
						textStyles={TEXT_TYPE.description}
					/>
					<ScrollableSection
						texts={[
							"There are too many Digital Brands trapped under traditional concepts of brand and design. Concepts created when the only way was printing and carrying a screen in your pocket was a Sci-Fy thing. Principles that when put against the nature of the digital world can’t hold up, but keep being used just because it is easier to keep doing things the same old way than to sit down and rack your brains trying to come up with something new.",
							"Digital means motion, and motion means alive. Greatest thing about the Digital World is the ability to break the boundaries between content and audience allowing the content to flow, adapt to different situations, interact with people, be in multiple places at once… Allowing it to be Alive. Definitely something to go for when creating a living brand.",
							"They say good design is invisible... We say good design is something you can’t live without once you experience it. There’s nothing like falling in love with a brand every time you see her. To provide the highest-end creative and visually attractive results, we don’t design “for” digital environments but “from” digital environments.",
							"Every brand has a story that begins with passion, keeps the light on in the darkest moments and gives the drive to chase those impossible dreams. An inspiring story hidden in the dark waiting for the right way to shine through. We wanna help you tell that story and become part of people's lives.",
						]}
						textStyles={TEXT_TYPE.description}
					/>
				</StyledBackbone>
			</Section>
			<Section theme={theme} ref={sectionRefs[3]}>
				<StyledMision>
					<h1>Mision</h1>
					<p>
						Our mission is to help Digital Brands step up, evolving till they become the ultimate
						version of themselves and achieve the results they always dreamed of.
					</p>
				</StyledMision>
			</Section>
			<Section theme={theme} ref={sectionRefs[4]}>
				<StyledWhy>
					<h1>Why</h1>
					<ScrollableSection
						texts={[
							"“Because I know what it is to have a dream that nobody understands; how it feels in the stomach when you do everything in your power to go after it, but things just seem to go against you. I understand all those nights without sleep and long stares at the wall trying to figure out what to do. I do, because just like you, I also started with a dream...",
							"The dream of creating things that could add to people’s lives, leaving a mark in this world; proving to myself that a nerdy kid that always fantasized about his future, could become something more than a bunch of impossible aspirations and broken dreams… ",
							"So it is because I understand the huge sacrifice it takes to pursue your dream life, that I want to use my creative abilities and acquired knowledge to provide digital brands in the same situation, with tools that can actually help them achieve theirs.”",
						]}
						textStyles={TEXT_TYPE.description}
					/>
				</StyledWhy>
			</Section>
			<Section theme={theme} ref={sectionRefs[5]}>
				<StyledDifferent>
					<p>
						What makes us different is our pure motivation to innovate and provide value. The honest
						drive of serving your cause to achieve your dream results, even if that would mean
						having to step aside and tell you we are not the best fit for the job.
					</p>
				</StyledDifferent>
			</Section>
			<Section theme={theme} ref={sectionRefs[6]}>
				<StyledStandFor>
					<h1>WE STAND FOR</h1>
					<ScrollableSection
						texts={["EVOLUTION /", "PERSEVERANCE /", "AMBITION /", "MODESTY /"]}
						textStyles={TEXT_TYPE.subtitle}
					/>
					<ScrollableSection
						texts={[
							"There’s always room to improve, learn, grow & innovate.",
							"No matter how steep or dark the path gets. Keep pushing. You owe it to your younger self who started the journey.",
							"Dream big or do not dream at all. Go big or go home.",
							"Only focus on helping and doing good for people. No hidden intentions.",
						]}
						textStyles={TEXT_TYPE.description}
					/>
				</StyledStandFor>
			</Section>
			<Footer theme={theme} ref={sectionRefs[7]} />
		</div>
	);
}
