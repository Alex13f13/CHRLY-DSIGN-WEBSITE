import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
	return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("primary");

	const toggleTheme = () => {
		setTheme(theme === "primary" ? "secondary" : "primary");
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
