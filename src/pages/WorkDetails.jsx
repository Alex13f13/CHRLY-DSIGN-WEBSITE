/* eslint-disable react-hooks/exhaustive-deps */
import { useTheme } from "../styles/ThemeContext";
import { THEME } from "../utils/constants";
import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { TextSlice } from "../components/TextSlice";
import styled from "styled-components";
import { themes } from "../styles/themes";
import { TEXT_TYPE } from "../utils/constants";

const StyledWork = styled.div`
	${({ theme }) => themes[theme]}
`;

const StyleContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default function WorkDetails() {
	//theme
	const { theme, selectTheme } = useTheme();
	useEffect(() => {
		selectTheme(THEME.primary);
	}, []);

	return (
		<StyledWork theme={theme}>
			<StyleContainer>
				<TextSlice textStyles={TEXT_TYPE.h5Main}>Work in progress</TextSlice>
			</StyleContainer>
			<Footer theme={theme} />
		</StyledWork>
	);
}
