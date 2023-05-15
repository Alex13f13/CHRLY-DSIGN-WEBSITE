import styled from "styled-components";
import { themes } from "../styles/themes";
import { THEME } from "../utils/constants";
import { forwardRef } from "react";

const StyledFooter = styled.section`
	${({ theme }) => themes[theme]}
	height: 40vh;
	width: 100%;
`;

// eslint-disable-next-line react/prop-types
export default function FooterBase({ theme = THEME.primary }, ref) {
	return (
		<StyledFooter ref={ref} theme={theme}>
			Footer
		</StyledFooter>
	);
}

export const Footer = forwardRef(FooterBase);
