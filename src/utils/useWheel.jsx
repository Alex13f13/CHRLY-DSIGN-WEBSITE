/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import { useElementScroll } from "./useElementScroll";
import { useSectionStep } from "./useSectionStep";
import { useLocation } from "react-router-dom";

export const useWheel = (stepsRefs = []) => {
	const { search } = useLocation();
	const sectionStep = useSectionStep();
	const [currentStep, setCurrentStep] = useState(sectionStep);
	const [isScrollingDown, setIsScrollingDown] = useState(true);
	const prevScrollTop = useRef(0);
	const [isContainerScrolling, handleScroll] = useElementScroll();

	useEffect(() => {
		if (sectionStep !== currentStep) {
			setCurrentStep(sectionStep);
		}
	}, [search]);

	useEffect(() => {
		scrollToSection();
	}, [currentStep]);

	const handleWheel = (e) => {
		if (isContainerScrolling()) return;
		handleScroll();

		const { deltaY } = e;
		const section = stepsRefs[currentStep]?.current;
		const sectionRect = section.getBoundingClientRect();
		const sectionRectBottom = Math.floor(sectionRect.bottom);
		const sectionRectTop = Math.floor(sectionRect.top);

		if (deltaY > 0) {
			// Scroll down
			setIsScrollingDown(true);
			if (sectionRectBottom <= window.innerHeight && currentStep < stepsRefs.length - 1) {
				setCurrentStep(currentStep + 1);
			}
		} else {
			// Scroll up
			setIsScrollingDown(false);
			if (sectionRectTop >= 0 && currentStep > 0) {
				setCurrentStep(currentStep - 1);
			}
		}
		prevScrollTop.current = window.scrollY;
	};

	const scrollToSection = () => {
		const section = stepsRefs[currentStep]?.current;
		if (section) {
			const sectionRect = section.getBoundingClientRect();
			const containerElement = section.parentElement;
			const containerRect = containerElement.getBoundingClientRect();
			const focusOn = isScrollingDown ? 0 : containerRect.height - sectionRect.height;

			const scrollTop = sectionRect.top - containerRect.top + containerElement.scrollTop - focusOn;

			containerElement.scrollTop = scrollTop;
		}
	};

	return { handleWheel, stepsRefs, currentStep };
};
