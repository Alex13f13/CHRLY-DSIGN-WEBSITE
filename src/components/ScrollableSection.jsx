/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState, useEffect } from "react";
import { THEME, ANIMATION, TEXT_TYPE } from "../utils/constants";
import { useTheme } from "../styles/ThemeContext";
import { animations } from "../styles/animations";
import { textTypes } from "../styles/textTypes";

const StyledSection = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	overflow: hidden;
`;

const TextSlice = styled.div`
	${(props) => textTypes[props.textStyles]}
	${(props) =>
		props.sliceActive ? "" : props.theme === THEME.primary ? "color: #202024" : "color: #E3E3E3"};
	${(animationType) => animations[animationType]}
`;

export const ScrollableSection = ({
	texts = [],
	animationType = ANIMATION.fades,
	textStyles = TEXT_TYPE.description,
	activeSection = false,
	currentStep = 0,
}) => {
	const { theme } = useTheme();
	const [sliceActive, setSliceActive] = useState(-1);
	const [beforeCurrentStep, setBeforeCurrentStep] = useState(0);

	useEffect(() => {
		if (!activeSection) {
			if (beforeCurrentStep > currentStep) setSliceActive(-1);

			return;
		}

		let indice;

		if (beforeCurrentStep > currentStep) {
			indice = sliceActive - 1;
		} else {
			indice = sliceActive + 1;
		}

		setBeforeCurrentStep(currentStep);

		if (indice >= texts.length) return;

		setSliceActive(indice);
	}, [currentStep]);

	return (
		<StyledSection>
			{texts?.map((paragraph, index) => (
				<TextSlice
					textStyles={textStyles}
					animationType={animationType}
					theme={theme}
					sliceActive={sliceActive === index}
					key={index}
				>
					{paragraph}
				</TextSlice>
			))}
		</StyledSection>
	);
};
