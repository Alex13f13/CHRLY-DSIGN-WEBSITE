import { createContext, useContext, useState } from "react";
import { THEME } from "../utils/constants";

const ThemeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
	return useContext(ThemeContext);
};

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(THEME.PRIMARY);

	const selectTheme = (selectedTheme) => {
		setTheme(selectedTheme);
	};

	return <ThemeContext.Provider value={{ theme, selectTheme }}>{children}</ThemeContext.Provider>;
};
