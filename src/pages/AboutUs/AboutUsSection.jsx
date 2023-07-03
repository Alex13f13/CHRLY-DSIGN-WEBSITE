import styled from "styled-components";
import { TEXT_TYPE } from "../../utils/constants";
import { TextSlice } from "../../components/TextSlice";

const StyledAboutUs = styled.div``;

export default function AboutUsSection() {
	return (
		<StyledAboutUs>
			<TextSlice textStyles={TEXT_TYPE.paragraph}>
				CHRLY DSIGN® is a high-end design & branding agency specialized in Digital Brands.
			</TextSlice>
		</StyledAboutUs>
	);
}
