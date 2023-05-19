/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState, useEffect } from "react";
import { ANIMATION, TEXT_TYPE } from "../utils/constants";
import { useTheme } from "../styles/ThemeContext";
import { TextSlice } from "./TextSlice";
import { animations } from "../styles/animations";

const StyledSection = styled.div`
	${(props) =>
		props?.activeSection ? animations[props?.animSectIn] : animations[props?.animSectOut]}
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	overflow: hidden;
`;

export const ScrollableSection = ({
	texts = [],
	animIn = ANIMATION.none,
	animOut = ANIMATION.none,
	animSectIn = ANIMATION.none,
	animSectOut = ANIMATION.none,
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
		<StyledSection activeSection={activeSection} animSectIn={animSectIn} animSectOut={animSectOut}>
			{texts?.map((paragraph, index) => (
				<TextSlice
					textStyles={textStyles}
					animIn={animIn}
					animOut={animOut}
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
