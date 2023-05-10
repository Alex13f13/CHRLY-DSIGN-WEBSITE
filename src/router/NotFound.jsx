import { useTheme } from "../styles/ThemeContext";
import { Section } from "../components/Section";

export default function NotFound() {
	const { theme } = useTheme();
	return (
		<Section theme={theme}>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>Error 404</i>
			</p>
		</Section>
	);
}
