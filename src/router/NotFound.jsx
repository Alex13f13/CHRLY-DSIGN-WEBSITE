import { useTheme } from "../styles/ThemeContext";
import { Section } from "../components/Section";
import { THEME } from "../utils/constants";
import { useEffect } from "react";

export default function NotFound() {
	const { theme, selectTheme } = useTheme();

	useEffect(() => {
		selectTheme(THEME.primary);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
