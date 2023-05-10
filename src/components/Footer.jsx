import styled from "styled-components";
import { themes } from "../styles/themes";
import { THEME } from "../utils/constants";

const StyledFooter = styled.div`
	${({ theme }) => themes[theme]}
	height: 40vh;
	width: 100%;
`;

// eslint-disable-next-line react/prop-types
export default function Footer({ theme = THEME.PRIMARY }) {
	return <StyledFooter theme={theme}>Footer</StyledFooter>;
}
