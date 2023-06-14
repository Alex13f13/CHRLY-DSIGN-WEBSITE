import styled from "styled-components";
import { TextSlice } from "../../components/TextSlice";
import { TEXT_TYPE } from "../../utils/constants";

const StyledAwards = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
`;

const StyledAwardDescription = styled.div`
	height: 100%;
	width: 20%;
	padding: 10%;
`;

const StyledAwardsContainer = styled.div`
	height: 100%;
	width: 60%;
`;

const StyledAwardYears = styled.div`
	height: 70%;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const StyledAwardExtra = styled.div`
	height: 30%;
	width: 100%;
	padding-left: 18%;
	padding-top: 3%;

	a {
		color: #e3e3e3;
		text-decoration: none;
	}
`;

export default function Awards() {
	return (
		<StyledAwards>
			<StyledAwardDescription>
				<TextSlice
					textExtraStyles={{
						fontSize: "3vw",
					}}
					textStyles={TEXT_TYPE.title}
				>
					Awards
				</TextSlice>
				<TextSlice
					textExtraStyles={{
						fontSize: "1.2vw",
						marginTop: "6%",
						fontWeight: 300,
					}}
					textStyles={TEXT_TYPE.subtitle}
				>
					Despite being a new agency, our innovative vision & approach are skyrocketing within the
					industry.
				</TextSlice>
			</StyledAwardDescription>
			<StyledAwardsContainer>
				<StyledAwardYears>
					<TextSlice textStyles={TEXT_TYPE.subtitle}>AWARD Component</TextSlice>
					<TextSlice textStyles={TEXT_TYPE.subtitle}>AWARD Component</TextSlice>
				</StyledAwardYears>
				<StyledAwardExtra>
					<a href="#">+ Other mentions and awards</a>
				</StyledAwardExtra>
			</StyledAwardsContainer>
		</StyledAwards>
	);
}
