/* eslint-disable react/prop-types */
import styled from "styled-components";
import { ScrollableSection } from "../../components/ScrollableSection";
import { TEXT_TYPE, ANIMATION } from "../../utils/constants";
import { TextSlice } from "../../components/TextSlice";

const StyledOffer = styled.div``;

export default function Offer({ currentStep, steps }) {
	return (
		<StyledOffer>
			<ScrollableSection
				texts={["EVOLUTI", "ON"]}
				textStyles={TEXT_TYPE.superTitle}
				currentStep={currentStep}
				scrollSteps={steps}
				animSectIn={ANIMATION.fadeIn}
				animSectOut={ANIMATION.fadeOut}
				sectionStyles={{
					width: "200%",
					overflow: "hidden",
					height: "40%",
					marginLeft: "10%",
					transform: "scale(1.2)",
				}}
			/>
			<TextSlice
				textExtraStyles={{
					height: "40%",
					marginLeft: "10%",
					marginTop: "2%",
					width: "41%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
				textStyles={TEXT_TYPE.subtitle}
			>
				Digital Brands are the future in the now. Why then use the same approach of the last 80
				years? By understanding their true nature, we provide the ultimate digital brand push that
				will get them on the path to their dream results.
			</TextSlice>
		</StyledOffer>
	);
}
