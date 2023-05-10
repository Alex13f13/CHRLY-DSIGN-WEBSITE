import styled from "styled-components";
import { themes } from "../styles/themes";
import { THEME } from "../utils/constants";

const StyledSection = styled.section`
	${({ theme }) => themes[theme]}
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

// eslint-disable-next-line react/prop-types
export const Section = ({ theme = THEME.PRIMARY, children }) => {
	return <StyledSection theme={theme}>{children}</StyledSection>;
};

export default Section;
