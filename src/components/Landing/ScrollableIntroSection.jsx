/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { useState, useEffect, useRef, createRef } from "react";
import { ANIMATION, TEXT_TYPE } from "../../utils/constants";
import { useTheme } from "../../styles/ThemeContext";
import { TextSlice } from "../TextSlice";
import { animations } from "../../styles/animations";

const StyledAnimSection = styled.div`
	animation: ${({ lastSteps }) => (lastSteps ? "lastin" : "lastout")} 0.8s forwards;
	@keyframes lastin {
		0% {
			font-weight: 500;
			font-size: 15.62vw;
		}
		100% {
			font-weight: 500;
			font-size: 21vw;
		}
	}
	@keyframes lastout {
		0% {
			font-weight: 500;
			font-size: 21vw;
		}
		100% {
			font-weight: 500;
			font-size: 15.62vw;
		}
	}
`;

const StyledSection = styled.div`
	animation: ${({ lastSteps }) => (lastSteps ? "lastin" : "lastout")} 0.8s forwards;
	@keyframes lastin {
		0% {
			font-weight: 500;
			font-size: 15.62vw;
		}
		100% {
			font-weight: 500;
			font-size: 21vw;
		}
	}
	@keyframes lastout {
		0% {
			font-weight: 500;
			font-size: 21vw;
		}
		100% {
			font-weight: 500;
			font-size: 15.62vw;
		}
	}
	${({ activeSection, animSectIn, animSectOut }) =>
		activeSection ? animations[animSectIn] : animations[animSectOut]}
	${(props) => props?.sectionStyles}
	display: flex;
	flex-direction: row;
	align-items: center;
	overflow: hidden;
	position: relative;
	scroll-behavior: smooth;
`;

export const ScrollableIntroSection = ({
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
	lastSteps = [],
}) => {
	const { theme } = useTheme();
	const [sliceActive, setSliceActive] = useState(-1);
	const [beforeCurrentStep, setBeforeCurrentStep] = useState(currentStep);

	const sliceRefs = useRef([]);
	sliceRefs.current = texts.map((_, i) => sliceRefs.current[i] ?? createRef());
	const lastRef = sliceRefs.current[sliceRefs.current.length - 1];
	sliceRefs.current.push(lastRef, lastRef);

	useEffect(() => {
		if (currentStep >= scrollSteps[scrollSteps.length - 1]) {
			setSliceActive(texts.length + 2);
		}
	}, []);

	useEffect(() => {
		if (!scrollSteps.includes(currentStep) && !lastSteps.includes(currentStep)) {
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

		if (index >= texts.length + 2) return;

		setSliceActive(index);

		if (sliceRefs.current[index]) {
			const sliceElement = sliceRefs.current[index].current;
			const containerElement = sliceElement.parentElement;

			const sliceRect = sliceElement.getBoundingClientRect();
			const containerRect = containerElement.getBoundingClientRect();

			const paddingLeft = containerRect.width * 0.07;

			const scrollLeft =
				sliceRect.left - containerRect.left + containerElement.scrollLeft - paddingLeft;

			// const scrollLeftBig = scrollLeft + sliceRect.width - containerRect.width * 0.86;
			const scrollLeftBig = scrollLeft + 200;

			const scrollLeftResult = lastSteps.includes(currentStep) ? scrollLeftBig : scrollLeft;

			containerElement.scrollLeft = scrollLeftResult;
		}
	}, [currentStep]);

	return (
		<StyledAnimSection lastSteps={lastSteps.includes(currentStep)}>
			<StyledSection
				sectionStyles={sectionStyles}
				activeSection={scrollSteps.includes(currentStep) || lastSteps.includes(currentStep)}
				animSectIn={animSectIn}
				animSectOut={animSectOut}
			>
				{texts?.map((paragraph, index) =>
					index < 5 ? (
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
					) : (
						<TextSlice
							textStyles={null}
							textExtraStyles={textExtraStyles}
							animIn={animIn}
							animOut={animOut}
							theme={theme}
							ref={sliceRefs.current[index]}
							sliceActive={sliceActive >= index}
							key={index}
						>
							{paragraph}
						</TextSlice>
					)
				)}
				<div style={{ flex: "0 0 auto", marginLeft: "15%", marginRight: "15%" }}></div>
			</StyledSection>
		</StyledAnimSection>
	);
};
