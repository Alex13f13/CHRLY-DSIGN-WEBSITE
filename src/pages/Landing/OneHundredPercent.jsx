import styled from "styled-components";
import { TextSlice } from "../../components/TextSlice";
import { TEXT_TYPE } from "../../utils/constants";

const StyledOneHundredPercent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100%;
`;

export default function OneHundredPercent() {
	return (
		<StyledOneHundredPercent>
			<TextSlice textStyles={TEXT_TYPE.title}>Evolve your brand to its 0% a 100%</TextSlice>
			<TextSlice
				textExtraStyles={{
					height: "40%",
					marginLeft: "10%",
					marginTop: "2%",
					width: "48.5%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					fontWeight: 300,
				}}
				textStyles={TEXT_TYPE.subtitle}
			>
				We take really few projects at a time, guaranteeing that we can deeply immerse on your
				brand’s current situation and provide high-end solutions to its needs. If you’re not opposed
				to getting your brand to the next level, get in touch as soon as possible before we’re fully
				booked.
			</TextSlice>
		</StyledOneHundredPercent>
	);
}
