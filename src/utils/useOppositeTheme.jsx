import { useTheme } from "../styles/ThemeContext";
import { THEME } from "./constants";

export const useOppositeTheme = () => {
	const { theme } = useTheme();
	const oppositeTheme = theme === THEME.primary ? THEME.secondary : THEME.primary;
	return oppositeTheme;
};
