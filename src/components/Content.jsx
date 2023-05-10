import styled from "styled-components";

const StyledContent = styled.div`
	margin-top: 10vh;
	overflow-y: scroll;
	overflow-x: hidden;
	height: 100vh;
`;

// eslint-disable-next-line react/prop-types
const Content = ({ children }) => {
	return <StyledContent>{children}</StyledContent>;
};

export default Content;
