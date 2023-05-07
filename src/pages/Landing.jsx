import { Section } from "../components/Section";
import { theme } from "../utils/constants";
import { StyledVideo } from "../styles/LandingStyle";

export default function Landing() {
	return (
		<>
			<Section>
				<StyledVideo>
					<h1>Video</h1>
				</StyledVideo>
			</Section>
			<Section theme={theme.secondary}>Intro</Section>
			<Section>Offer</Section>
			<Section theme={theme.secondary}>Work</Section>
			<Section>100%</Section>
			<Section theme={theme.secondary}>Awards</Section>
		</>
	);
}
