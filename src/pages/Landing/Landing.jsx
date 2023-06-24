/* eslint-disable react-hooks/exhaustive-deps */
import { Section } from "../../components/Section";
import { BigSection } from "../../components/BigSection";
import { useTheme } from "../../styles/ThemeContext";
import { THEME } from "../../utils/constants";
import { useEffect, useRef } from "react";
import { useWheel } from "../../utils/useWheel";
import { Footer } from "../../components/Footer";
import { StyledHidenContent } from "../../components/Content";
import { useSearchParams } from "react-router-dom";
import Video from "./Video";
import Intro from "./Intro";
import Offer from "./Offer";
import WorkList from "./WorkList";
import OneHundredPercent from "./OneHundredPercent";
import Awards from "./Awards";

export default function Landing() {
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
	];

	const { handleWheel, stepsRefs, currentStep } = useWheel(steps);

	//theme
	const { theme, selectTheme } = useTheme();
	const whiteSections = [];
	useEffect(() => {
		if (whiteSections.includes(currentStep)) selectTheme(THEME.secondary);
		else selectTheme(THEME.primary);
	}, [currentStep]);

	return (
		<StyledHidenContent scrolleable={currentStep === 10} onWheel={handleWheel}>
			<Section theme={theme} ref={stepsRefs[0]}>
				<Video />
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
				<Intro currentStep={currentStep} steps={[2, 3, 4, 5, 6, 7]} />
			</Section>
			<Section
				theme={theme}
				ref={(node) => ((stepsRefs[8].current = node), (stepsRefs[9].current = node))}
			>
				<Offer currentStep={currentStep} steps={[8, 9]} />
			</Section>
			<BigSection theme={theme} ref={stepsRefs[10]}>
				<WorkList />
			</BigSection>
			<Section theme={theme} ref={stepsRefs[11]}>
				<OneHundredPercent />
			</Section>
			<Section theme={theme} ref={stepsRefs[12]}>
				<Awards />
			</Section>
			<Footer theme={theme} ref={stepsRefs[13]} />
		</StyledHidenContent>
	);
}
