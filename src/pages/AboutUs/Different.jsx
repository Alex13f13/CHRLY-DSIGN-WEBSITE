import styled from "styled-components";
import { TEXT_TYPE } from "../../utils/constants";
import { TextSlice } from "../../components/TextSlice";

const StyledDifferent = styled.div``;

export default function Different() {
	return (
		<StyledDifferent>
			<TextSlice textStyles={TEXT_TYPE.description}>
				What makes us different is our pure motivation to innovate and provide value. The honest
				drive of serving your cause to achieve your dream results, even if that would mean having to
				step aside and tell you we are not the best fit for the job.
			</TextSlice>
		</StyledDifferent>
	);
}
