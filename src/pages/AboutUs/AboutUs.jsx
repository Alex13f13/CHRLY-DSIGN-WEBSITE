/* eslint-disable react-hooks/exhaustive-deps */
import { Section } from "../../components/Section";
import { useTheme } from "../../styles/ThemeContext";
import { THEME } from "../../utils/constants";
import { useEffect, useRef } from "react";
import { Footer } from "../../components/Footer";
import { useWeel } from "../../utils/useWeel";
import { StyledHidenContent } from "../../components/Content";
import { useSearchParams } from "react-router-dom";
import AboutUsSection from "./AboutUsSection";
import WhatWeDo from "./WhatWeDo";
import Backbone from "./Backbone";
import Mision from "./Mision";
import Why from "./Why";
import Different from "./Different";
import StandFor from "./StandFor";

export default function AboutUs() {
	const [searchParams] = useSearchParams();
	const linkParam = searchParams?.get("link");
	console.log(linkParam);

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
		useRef(null), // 15
		useRef(null), // 16
		useRef(null), // 17
		useRef(null), // 18
	];

	const { handleWheel, stepsRefs, currentStep } = useWeel(steps);

	//theme
	const { theme, selectTheme } = useTheme();
	const whiteSections = [1, 2, 3, 4, 5];
	useEffect(() => {
		if (whiteSections.includes(currentStep)) selectTheme(THEME.secondary);
		else selectTheme(THEME.primary);
	}, [currentStep]);

	return (
		<StyledHidenContent onWheel={handleWheel}>
			<Section theme={theme} ref={stepsRefs[0]}>
				<AboutUsSection />
			</Section>
			<Section theme={theme} ref={stepsRefs[1]}>
				<WhatWeDo />
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
				<Backbone currentStep={currentStep} steps={[2, 3, 4, 5]} />
			</Section>
			<Section theme={theme} ref={stepsRefs[6]}>
				<Mision currentStep={currentStep} />
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
				<Why currentStep={currentStep} steps={[10, 11, 12]} />
			</Section>
			<Section theme={theme} ref={stepsRefs[13]}>
				<Different />
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
				<StandFor currentStep={currentStep} steps={[14, 15, 16, 17]} />
			</Section>
			<Footer theme={theme} ref={stepsRefs[18]} />
		</StyledHidenContent>
	);
}
