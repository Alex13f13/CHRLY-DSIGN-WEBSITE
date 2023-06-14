import styled from "styled-components";

const StyledVideo = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledVideoSource = styled.video`
	height: 100%;
	width: 100%;
`;

export default function Video() {
	return (
		<StyledVideo>
			<StyledVideoSource src="" autoPlay loop muted></StyledVideoSource>
		</StyledVideo>
	);
}
