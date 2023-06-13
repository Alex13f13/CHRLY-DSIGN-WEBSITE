/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import { Section } from "../components/Section";
import { useTheme } from "../styles/ThemeContext";
import { ScrollableSection } from "../components/ScrollableSection";
import { THEME, TEXT_TYPE, ANIMATION } from "../utils/constants";
import { useEffect, useRef } from "react";
import { useWeel } from "../utils/useWeel";
import { Footer } from "../components/Footer";
import { TextSlice } from "../components/TextSlice";
import { StyledHidenContent } from "../components/Content";
import { useSearchParams } from "react-router-dom";

const StyledVideo = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledVideoSource = styled.video`
	height: 100%;
	width: 100%;
`;

const StyledIntro = styled.div`
	height: 100%;
	width: 100%;
`;

const StyledOffer = styled.div``;

const StyledWork = styled.div``;

const StyledWorkBar = styled.div`
	height: 10%;
	width: 100%;
	margin-top: 5%;
	display: flex;
	align-items: center;
`;

const StyledOneHundredPercent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100%;
`;

const StyledAwards = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
`;

const StyledAwardDescription = styled.div`
	height: 100%;
	width: 20%;
	padding: 10%;
`;

const StyledAwardsContainer = styled.div`
	height: 100%;
	width: 60%;
`;

const StyledAwardYears = styled.div`
	height: 70%;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const StyledAwardExtra = styled.div`
	height: 30%;
	width: 100%;
	padding-left: 18%;
	padding-top: 3%;

	a {
		color: #e3e3e3;
		text-decoration: none;
	}
`;

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
	const { handleWheel, stepsRefs, currentStep } = useWeel(steps);

	//steps in sections
	const introSteps = [2, 3, 4, 5, 6, 7];
	const offerSteps = [8, 9];

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
					<TextSlice
						textStyles={TEXT_TYPE.subtitle}
						textExtraStyles={{
							height: "40%",
							marginLeft: "10%",
							width: "48%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						Welcome to CHRLY DSIGN, the award winning Digital Multimedia Branding agency that makes
						digital brands evolve so much, their big dreams become tiny.
					</TextSlice>
					<ScrollableSection
						texts={["BRANDING ", "DESIGN", "MOTION", "IDENTIFY", "INTERFACE", "EVOLUTION"]}
						textStyles={TEXT_TYPE.superTitle}
						currentStep={currentStep}
						activeSection={introSteps.includes(currentStep)}
						animSectIn={ANIMATION.fadeIn}
						animSectOut={ANIMATION.fadeOut}
						sectionStyles={{
							width: "400%",
							overflow: "hidden",
							height: "40%",
							marginLeft: "10%",
						}}
						textExtraStyles={{
							marginRight: "0.5%",
						}}
					/>
				</StyledIntro>
			</Section>
			<Section
				theme={theme}
				ref={(node) => ((stepsRefs[8].current = node), (stepsRefs[9].current = node))}
			>
				<StyledOffer>
					<ScrollableSection
						texts={["EVOLUTI", "ON"]}
						textStyles={TEXT_TYPE.superTitle}
						currentStep={currentStep}
						activeSection={offerSteps.includes(currentStep)}
						animSectIn={ANIMATION.fadeIn}
						animSectOut={ANIMATION.fadeOut}
						sectionStyles={{
							width: "200%",
							overflow: "hidden",
							height: "40%",
							marginLeft: "10%",
							transform: "scale(1.2)",
						}}
					/>
					<TextSlice
						textExtraStyles={{
							height: "40%",
							marginLeft: "10%",
							marginTop: "2%",
							width: "41%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
						textStyles={TEXT_TYPE.subtitle}
					>
						Digital Brands are the future in the now. Why then use the same approach of the last 80
						years? By understanding their true nature, we provide the ultimate digital brand push
						that will get them on the path to their dream results.
					</TextSlice>
				</StyledOffer>
			</Section>
			<Section theme={theme} ref={stepsRefs[10]}>
				<StyledWork>
					<TextSlice
						textExtraStyles={{
							fontSize: "20vw",
							width: "100%",
							overflow: "hidden",
							height: "40%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
						textStyles={TEXT_TYPE.superTitle}
					>
						Work
					</TextSlice>
					<TextSlice
						textExtraStyles={{
							fontSize: "1.2vw",
							height: "40%",
							marginLeft: "46%",
							width: "36%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
						textStyles={TEXT_TYPE.subtitle}
					>
						Brands are more than just strategy and design. They are living organisms that inspire.
						To provide the highest-end results, we use cutting-edge techniques and tailored
						processes that deliver.
					</TextSlice>
					<StyledWorkBar>
						-----------------------------------------------------------------------------------------------------------------------------------------
						FEATURED WORK
					</StyledWorkBar>
					{/* <TextSlice
						textExtraStyles={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
						textStyles={TEXT_TYPE.title}
					>
						Work List Component
					</TextSlice> */}
				</StyledWork>
			</Section>
			<Section theme={theme} ref={stepsRefs[11]}>
				<StyledOneHundredPercent>
					<TextSlice textStyles={TEXT_TYPE.title}>Evolve your brand to its 0% a 100%</TextSlice>
					<TextSlice
						textExtraStyles={{
							height: "40%",
							marginLeft: "10%",
							marginTop: "2%",
							width: "48.5%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							fontWeight: 300,
						}}
						textStyles={TEXT_TYPE.subtitle}
					>
						We take really few projects at a time, guaranteeing that we can deeply immerse on your
						brand’s current situation and provide high-end solutions to its needs. If you’re not
						opposed to getting your brand to the next level, get in touch as soon as possible before
						we’re fully booked.
					</TextSlice>
				</StyledOneHundredPercent>
			</Section>
			<Section theme={theme} ref={stepsRefs[12]}>
				<StyledAwards>
					<StyledAwardDescription>
						<TextSlice
							textExtraStyles={{
								fontSize: "3vw",
							}}
							textStyles={TEXT_TYPE.title}
						>
							Awards
						</TextSlice>
						<TextSlice
							textExtraStyles={{
								fontSize: "1.2vw",
								marginTop: "6%",
								fontWeight: 300,
							}}
							textStyles={TEXT_TYPE.subtitle}
						>
							Despite being a new agency, our innovative vision & approach are skyrocketing within
							the industry.
						</TextSlice>
					</StyledAwardDescription>
					<StyledAwardsContainer>
						<StyledAwardYears>
							<TextSlice textStyles={TEXT_TYPE.subtitle}>AWARD Component</TextSlice>
							<TextSlice textStyles={TEXT_TYPE.subtitle}>AWARD Component</TextSlice>
						</StyledAwardYears>
						<StyledAwardExtra>
							<a href="#">+ Other mentions and awards</a>
						</StyledAwardExtra>
					</StyledAwardsContainer>
				</StyledAwards>
			</Section>
			<Footer theme={theme} ref={stepsRefs[13]} />
		</StyledHidenContent>
	);
}
