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
import { THEME } from "../utils/constants";
import { useEffect, useRef } from "react";
import { useWeel } from "../utils/useWeel";
import { Footer } from "../components/Footer";

export default function Landing() {
	const { theme, selectTheme } = useTheme();
	useEffect(() => selectTheme(THEME.primary), []);
	const refs = [
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
	];
	const { handleWheel, sectionRefs } = useWeel(refs);

	return (
		<div onWheel={handleWheel}>
			<Section theme={theme} ref={sectionRefs[0]}>
				<StyledVideo>
					<StyledVideoSource src="" autoPlay loop muted></StyledVideoSource>
				</StyledVideo>
			</Section>
			<Section theme={theme} ref={sectionRefs[1]}>
				<StyledIntro>
					<p>
						Welcome to CHRLY DSIGN, the award winning Digital Multimedia Branding agency that makes
						digital brands evolve so much, their big dreams become tiny.
					</p>
					<ScrollableSection
						texts={["BRANDING ", "DESIGN", "MOTION", "IDENTIFY", "INTERFACE", "EVOLUTION"]}
					/>
				</StyledIntro>
			</Section>
			<Section theme={theme} ref={sectionRefs[2]}>
				<StyledOffer>
					<ScrollableSection texts={["EVOLUTI", "ON"]} />
					<p>
						Digital Brands are the future in the now. Why then use the same approach of the last 80
						years? By understanding their true nature, we provide the ultimate digital brand push
						that will get them on the path to their dream results.
					</p>
				</StyledOffer>
			</Section>
			<Section theme={theme} ref={sectionRefs[3]}>
				<StyledWork>
					<h1>Work</h1>
					<p>
						Brands are more than just strategy and design. They are living organisms that inspire.
						To provide the highest-end results, we use cutting-edge techniques and tailored
						processes that deliver.
					</p>
					<div>
						--------------------------------------------------------------------- FEATURED WORK
					</div>
					<h1>Work List Component</h1>
				</StyledWork>
			</Section>
			<Section theme={theme} ref={sectionRefs[4]}>
				<StyledOneHundredPercent>
					<h1>Evolve your brand to its 0% a 100%</h1>
					<p>
						We take really few projects at a time, guaranteeing that we can deeply immerse on your
						brand’s current situation and provide high-end solutions to its needs. If you’re not
						opposed to getting your brand to the next level, get in touch as soon as possible before
						we’re fully booked.
					</p>
				</StyledOneHundredPercent>
			</Section>
			<Section theme={theme} ref={sectionRefs[5]}>
				<StyledAwards>
					<h1>Awards</h1>
					<p>
						Despite being a new agency, our innovative vision & approach are skyrocketing within the
						industry.
					</p>
					<h3>AWARD Component</h3>
					<h3>AWARD Component</h3>
					<a href="#">- Other mentions and awards</a>
				</StyledAwards>
			</Section>
			<Footer theme={theme} ref={sectionRefs[6]} />
		</div>
	);
}
