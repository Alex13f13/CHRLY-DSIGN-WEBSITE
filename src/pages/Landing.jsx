/* eslint-disable react-hooks/exhaustive-deps */
import { Section } from "../components/Section";
import {
	StyledVideo,
	StyledIntro,
	StyledOffer,
	StyledWork,
	StyledOneHundredPercent,
	StyledAwards,
	StyledVideoSource,
} from "../styles/LandingStyle";
import { useTheme } from "../styles/ThemeContext";
import { ScrollableSection } from "../components/ScrollableSection";
import { THEME, TEXT_TYPE, ANIMATION } from "../utils/constants";
import { useEffect, useRef } from "react";
import { useWeel } from "../utils/useWeel";
import { Footer } from "../components/Footer";
import { TextSlice } from "../components/TextSlice";
import { StyledHidenContent } from "../components/Content";

export default function Landing() {
	//all steps
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
	];
	const { handleWheel, stepsRefs, currentStep } = useWeel(steps);

	//steps in sections
	const introSteps = [2, 3, 4, 5, 6, 7];
	const offerSteps = [8, 9, 10];

	//theme
	const { theme, selectTheme } = useTheme();
	const whiteSections = [];
	useEffect(() => {
		if (whiteSections.includes(currentStep)) selectTheme(THEME.secondary);
		else selectTheme(THEME.primary);
	}, [currentStep]);

	return (
		<StyledHidenContent onWheel={handleWheel}>
			<Section theme={theme} ref={stepsRefs[0]}>
				<StyledVideo>
					<StyledVideoSource src="" autoPlay loop muted></StyledVideoSource>
				</StyledVideo>
			</Section>
			<Section
				theme={theme}
				ref={(node) => (
					(stepsRefs[1].current = node),
					(stepsRefs[2].current = node),
					(stepsRefs[3].current = node),
					(stepsRefs[4].current = node),
					(stepsRefs[5].current = node),
					(stepsRefs[6].current = node),
					(stepsRefs[7].current = node)
				)}
			>
				<StyledIntro>
					<TextSlice textStyles={TEXT_TYPE.description}>
						Welcome to CHRLY DSIGN, the award winning Digital Multimedia Branding agency that makes
						digital brands evolve so much, their big dreams become tiny.
					</TextSlice>
					<ScrollableSection
						texts={["BRANDING ", "DESIGN", "MOTION", "IDENTIFY", "INTERFACE", "EVOLUTION"]}
						textStyles={TEXT_TYPE.title}
						currentStep={currentStep}
						activeSection={introSteps.includes(currentStep)}
						animSectIn={ANIMATION.fadeIn}
						animSectOut={ANIMATION.fadeOut}
					/>
				</StyledIntro>
			</Section>
			<Section
				theme={theme}
				ref={(node) => (
					(stepsRefs[8].current = node),
					(stepsRefs[9].current = node),
					(stepsRefs[10].current = node)
				)}
			>
				<StyledOffer>
					<ScrollableSection
						texts={["EVOLUTI", "ON"]}
						textStyles={TEXT_TYPE.title}
						currentStep={currentStep}
						activeSection={offerSteps.includes(currentStep)}
						// animSectIn={ANIMATION.fadeIn}
						animSectOut={ANIMATION.fadeOut}
					/>
					<TextSlice textStyles={TEXT_TYPE.description}>
						Digital Brands are the future in the now. Why then use the same approach of the last 80
						years? By understanding their true nature, we provide the ultimate digital brand push
						that will get them on the path to their dream results.
					</TextSlice>
				</StyledOffer>
			</Section>
			<Section theme={theme} ref={stepsRefs[11]}>
				<StyledWork>
					<TextSlice textStyles={TEXT_TYPE.title}>Work</TextSlice>
					<TextSlice textStyles={TEXT_TYPE.description}>
						Brands are more than just strategy and design. They are living organisms that inspire.
						To provide the highest-end results, we use cutting-edge techniques and tailored
						processes that deliver.
					</TextSlice>
					<div>
						--------------------------------------------------------------------- FEATURED WORK
					</div>
					<TextSlice textStyles={TEXT_TYPE.title}>Work List Component</TextSlice>
				</StyledWork>
			</Section>
			<Section theme={theme} ref={stepsRefs[12]}>
				<StyledOneHundredPercent>
					<TextSlice textStyles={TEXT_TYPE.title}>Evolve your brand to its 0% a 100%</TextSlice>
					<TextSlice textStyles={TEXT_TYPE.description}>
						We take really few projects at a time, guaranteeing that we can deeply immerse on your
						brand’s current situation and provide high-end solutions to its needs. If you’re not
						opposed to getting your brand to the next level, get in touch as soon as possible before
						we’re fully booked.
					</TextSlice>
				</StyledOneHundredPercent>
			</Section>
			<Section theme={theme} ref={stepsRefs[13]}>
				<StyledAwards>
					<TextSlice textStyles={TEXT_TYPE.title}>Awards</TextSlice>
					<TextSlice textStyles={TEXT_TYPE.description}>
						Despite being a new agency, our innovative vision & approach are skyrocketing within the
						industry.
					</TextSlice>
					<TextSlice textStyles={TEXT_TYPE.subtitle}>AWARD Component</TextSlice>
					<TextSlice textStyles={TEXT_TYPE.subtitle}>AWARD Component</TextSlice>
					<a href="#">- Other mentions and awards</a>
				</StyledAwards>
			</Section>
			<Footer theme={theme} ref={stepsRefs[14]} />
		</StyledHidenContent>
	);
}
