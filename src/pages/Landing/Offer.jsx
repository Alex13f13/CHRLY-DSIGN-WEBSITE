/* eslint-disable react/prop-types */
import styled from "styled-components";
import { ScrollableOfferSection } from "../../components/Landing/ScrollableOfferSection";
import { TEXT_TYPE, ANIMATION } from "../../utils/constants";
import { TextSlice } from "../../components/TextSlice";

const StyledOffer = styled.div`
	height: 100%;
	width: 100%;
`;

const StyledParagraph2Container = styled.div`
	margin-top: 7.61vh;
	margin-left: 9.03vw;
	width: 68vw;
`;

export default function Offer({ currentStep, steps }) {
	return (
		<StyledOffer>
			<ScrollableOfferSection
				texts={["EVOLUTI", "ON"]}
				textStyles={TEXT_TYPE.h1Main}
				currentStep={currentStep}
				scrollSteps={steps}
				// animSectIn={ANIMATION.scaleIn}
				// animSectOut={ANIMATION.scaleOut}
				sectionStyles={{}}
			/>
			<StyledParagraph2Container>
				<TextSlice textStyles={TEXT_TYPE.mainText}>
					Digital Brands are the future in the now. Why then use the same approach of the last 80
					years? By understanding their true nature, we provide the ultimate digital brand push that
					will get them on the path to their dream results.
				</TextSlice>
			</StyledParagraph2Container>
		</StyledOffer>
	);
}
