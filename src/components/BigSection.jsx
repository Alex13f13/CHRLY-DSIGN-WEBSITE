import styled from "styled-components";
import { themes } from "../styles/themes";
import { THEME } from "../utils/constants";
import { forwardRef } from "react";

const StyledBigSection = styled.section`
	${({ theme }) => themes[theme]}
	::-webkit-scrollbar {
		display: none;
	}
`;

// eslint-disable-next-line react/prop-types
const BigSectionBase = ({ theme = THEME.primary, children }, ref) => {
	return (
		<StyledBigSection ref={ref} theme={theme}>
			{children}
		</StyledBigSection>
	);
};

export const BigSection = forwardRef(BigSectionBase);
