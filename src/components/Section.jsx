import styled from "styled-components";
import { themes } from "../styles/themes";
import { THEME } from "../utils/constants";
import { forwardRef } from "react";

const StyledSection = styled.section`
	${({ theme }) => themes[theme]}
	height: 90vh;
	overflow: hidden;
`;

// eslint-disable-next-line react/prop-types
const SectionBase = ({ theme = THEME.primary, children }, ref) => {
	return (
		<StyledSection ref={ref} theme={theme}>
			{children}
		</StyledSection>
	);
};

export const Section = forwardRef(SectionBase);
