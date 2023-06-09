/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { Section } from "../../components/Section";
import { BigSection } from "../../components/BigSection";
import { useTheme } from "../../styles/ThemeContext";
import { THEME } from "../../utils/constants";
import { useEffect, useRef } from "react";
import { useWheel } from "../../utils/useWheel";
import { Footer } from "../../components/Footer";
import { StyledHidenContent } from "../../components/Content";
import Video from "./Video";
import Intro from "./Intro";
import WorkList from "./WorkList";
import OneHundredPercent from "./OneHundredPercent";
import Awards from "./Awards";

export default function Landing() {
	// All steps
	const steps = Array.from({ length: 14 }).map(() => useRef(null));
	const { handleWheel, stepsRefs, currentStep } = useWheel(steps);

	const allStepsRefs = {
		video: stepsRefs[0],
		intro: (node) => (
			(stepsRefs[1].current = node),
			(stepsRefs[2].current = node),
			(stepsRefs[3].current = node),
			(stepsRefs[4].current = node),
			(stepsRefs[5].current = node),
			(stepsRefs[6].current = node),
			(stepsRefs[7].current = node),
			(stepsRefs[8].current = node),
			(stepsRefs[9].current = node)
		),
		workList: stepsRefs[10],
		oneHundredPercent: stepsRefs[11],
		awards: stepsRefs[12],
		footer: stepsRefs[13],
	};

	//theme
	const { theme, selectTheme } = useTheme();
	const whiteSections = [];
	useEffect(() => {
		if (whiteSections.includes(currentStep)) selectTheme(THEME.secondary);
		else selectTheme(THEME.primary);
	}, [currentStep]);

	return (
		<StyledHidenContent scrolleable={currentStep === 10} onWheel={handleWheel}>
			<Section theme={theme} ref={allStepsRefs?.video}>
				<Video />
			</Section>
			<Section theme={theme} ref={allStepsRefs?.intro}>
				<Intro currentStep={currentStep} steps={{ intro: [2, 3, 4, 5, 6, 7], offer: [8, 9] }} />
			</Section>
			<BigSection theme={theme} ref={allStepsRefs?.workList}>
				<WorkList />
			</BigSection>
			<Section theme={theme} ref={allStepsRefs?.oneHundredPercent}>
				<OneHundredPercent />
			</Section>
			<Section theme={theme} ref={allStepsRefs?.awards}>
				<Awards />
			</Section>
			<Footer theme={theme} ref={allStepsRefs?.footer} />
		</StyledHidenContent>
	);
}
