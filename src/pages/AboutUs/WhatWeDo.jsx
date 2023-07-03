import styled from "styled-components";
import { TEXT_TYPE } from "../../utils/constants";
import { TextSlice } from "../../components/TextSlice";

const StyledWhatWeDo = styled.div``;

export default function WhatWeDo() {
	return (
		<StyledWhatWeDo>
			<TextSlice textStyles={TEXT_TYPE.paragraph}>
				If you’re looking for usual brand stuff this is not the place. We provide creative
				innovation for companies that seek to step into the future, push their limits and evolve.
				These are our beliefs:
			</TextSlice>
		</StyledWhatWeDo>
	);
}
