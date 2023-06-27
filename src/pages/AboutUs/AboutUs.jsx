/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { Section } from "../../components/Section";
import { useTheme } from "../../styles/ThemeContext";
import { THEME } from "../../utils/constants";
import { useEffect, useRef } from "react";
import { Footer } from "../../components/Footer";
import { useWheel } from "../../utils/useWheel";
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

	const steps = Array.from({ length: 19 }).map(() => useRef(null));

	const { handleWheel, stepsRefs, currentStep } = useWheel(steps);

	const allStepsRefs = {
		aboutUsSection: stepsRefs[0],
		whatWeDo: stepsRefs[1],
		backbone: (node) => (
			(stepsRefs[2].current = node),
			(stepsRefs[3].current = node),
			(stepsRefs[4].current = node),
			(stepsRefs[5].current = node)
		),
		mision: stepsRefs[6],
		why: (node) => (
			(stepsRefs[7].current = node),
			(stepsRefs[8].current = node),
			(stepsRefs[9].current = node),
			(stepsRefs[10].current = node),
			(stepsRefs[11].current = node),
			(stepsRefs[12].current = node)
		),
		different: stepsRefs[13],
		standFor: (node) => (
			(stepsRefs[14].current = node),
			(stepsRefs[15].current = node),
			(stepsRefs[16].current = node),
			(stepsRefs[17].current = node)
		),
		footer: stepsRefs[18],
	};

	//theme
	const { theme, selectTheme } = useTheme();
	const whiteSections = [1, 2, 3, 4, 5];
	useEffect(() => {
		if (whiteSections.includes(currentStep)) selectTheme(THEME.secondary);
		else selectTheme(THEME.primary);
	}, [currentStep]);

	return (
		<StyledHidenContent onWheel={handleWheel}>
			<Section theme={theme} ref={allStepsRefs.aboutUsSection}>
				<AboutUsSection />
			</Section>
			<Section theme={theme} ref={allStepsRefs.whatWeDo}>
				<WhatWeDo />
			</Section>
			<Section theme={theme} ref={allStepsRefs.backbone}>
				<Backbone currentStep={currentStep} steps={[2, 3, 4, 5]} />
			</Section>
			<Section theme={theme} ref={allStepsRefs.mision}>
				<Mision currentStep={currentStep} />
			</Section>
			<Section theme={theme} ref={allStepsRefs.why}>
				<Why currentStep={currentStep} steps={[10, 11, 12]} />
			</Section>
			<Section theme={theme} ref={allStepsRefs.different}>
				<Different />
			</Section>
			<Section theme={theme} ref={allStepsRefs.standFor}>
				<StandFor currentStep={currentStep} steps={[14, 15, 16, 17]} />
			</Section>
			<Footer theme={theme} ref={allStepsRefs.footer} />
		</StyledHidenContent>
	);
}
