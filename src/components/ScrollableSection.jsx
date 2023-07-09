/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import { ANIMATION, TEXT_TYPE } from "../utils/constants";
import { useTheme } from "../styles/ThemeContext";
import { TextSlice } from "./TextSlice";
import { animations } from "../styles/animations";
import { useRef, createRef } from "react";

const StyledSection = styled.div`
	${(props) =>
		props?.activeSection ? animations[props?.animSectIn] : animations[props?.animSectOut]}
	${(props) => props?.sectionStyles}
  display: flex;
	flex-direction: row;
	align-items: center;
	overflow: hidden;
	position: relative;
	scroll-behavior: smooth;
`;

export const ScrollableSection = ({
	texts = [],
	sectionStyles = css``,
	textExtraStyles = css``,
	animIn = ANIMATION.default,
	animOut = ANIMATION.default,
	animSectIn = ANIMATION.default,
	animSectOut = ANIMATION.default,
	textStyles = TEXT_TYPE.paragraph,
	currentStep = 0,
	scrollSteps = [],
	children,
}) => {
	const { theme } = useTheme();
	const [sliceActive, setSliceActive] = useState(-1);
	const [beforeCurrentStep, setBeforeCurrentStep] = useState(currentStep);

	const sliceRefs = useRef([]);
	sliceRefs.current = texts.map((_, i) => sliceRefs.current[i] ?? createRef());

	useEffect(() => {
		if (currentStep >= scrollSteps[scrollSteps.length - 1]) {
			setSliceActive(texts.length);
		}
	}, []);

	useEffect(() => {
		if (!scrollSteps.includes(currentStep)) {
			if (beforeCurrentStep > currentStep && sliceActive !== texts.length) {
				setSliceActive(-1);
			}
			return;
		}
		let index;

		if (beforeCurrentStep > currentStep) {
			index = sliceActive - 1;
		} else {
			index = sliceActive + 1;
		}

		setBeforeCurrentStep(currentStep);

		if (index >= texts.length) return;

		setSliceActive(index);

		if (sliceRefs.current[index]) {
			const sliceElement = sliceRefs.current[index].current;
			const containerElement = sliceElement.parentElement;

			const sliceRect = sliceElement.getBoundingClientRect();
			const containerRect = containerElement.getBoundingClientRect();

			const paddingLeft = containerRect.width * 0.07;

			const scrollLeft =
				sliceRect.left - containerRect.left + containerElement.scrollLeft - paddingLeft;

			containerElement.scrollLeft = scrollLeft;
		}
	}, [currentStep]);

	return (
		<StyledSection
			sectionStyles={sectionStyles}
			activeSection={scrollSteps.includes(currentStep)}
			animSectIn={animSectIn}
			animSectOut={animSectOut}
		>
			{texts?.map((paragraph, index) => (
				<TextSlice
					textStyles={textStyles}
					textExtraStyles={textExtraStyles}
					animIn={animIn}
					animOut={animOut}
					theme={theme}
					ref={sliceRefs.current[index]}
					sliceActive={sliceActive === index}
					key={index}
				>
					{paragraph}
				</TextSlice>
			))}
			{children}
		</StyledSection>
	);
};
