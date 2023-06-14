/* eslint-disable react/prop-types */
import styled from "styled-components";
import { TEXT_TYPE } from "../../utils/constants";
import { TextSlice } from "../../components/TextSlice";

const StyledMision = styled.div``;

export default function Mision({ currentStep }) {
	return (
		<StyledMision>
			<TextSlice textStyles={TEXT_TYPE.title}>Mision</TextSlice>
			<TextSlice textStyles={TEXT_TYPE.description} sliceActive={currentStep === 6}>
				Our mission is to help Digital Brands step up, evolving till they become the ultimate
				version of themselves and achieve the results they always dreamed of.
			</TextSlice>
		</StyledMision>
	);
}
