import styled from "styled-components";
import { themes } from "../styles/themes";

const StyledSection = styled.section`
	${({ theme }) => themes[theme]}
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

// eslint-disable-next-line react/prop-types
export const Section = ({ theme = "primary", children }) => {
	return <StyledSection theme={theme}>{children}</StyledSection>;
};

export default Section;
