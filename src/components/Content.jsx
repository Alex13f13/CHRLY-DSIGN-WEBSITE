import styled from "styled-components";

const StyledContent = styled.div`
	margin-top: 10vh;
`;

export const StyledHidenContent = styled.div`
	overflow: hidden;
	${({ scrolleable }) => scrolleable && "overflow-y: scroll;"}
	height: 90vh;
	position: relative;
	scroll-behavior: smooth;
	::-webkit-scrollbar {
		display: none;
	}
`;

// eslint-disable-next-line react/prop-types
const Content = ({ children }) => {
	return <StyledContent>{children}</StyledContent>;
};

export default Content;
