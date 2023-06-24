/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useElementScroll } from "./useElementScroll";

export const useWheel = (stepsRefs = []) => {
	const [currentStep, setCurrentStep] = useState(0);
	const [isContainerScrolling, handleScroll] = useElementScroll();

	useEffect(() => {
		scrollToSection();
	}, [currentStep]);

	const handleWheel = (e) => {
		if (isContainerScrolling()) return;
		scrollToSection();
		handleScroll();

		const { deltaY } = e;
		if (deltaY > 0) {
			// Scroll down
			if (currentStep < stepsRefs.length - 1) {
				setCurrentStep(currentStep + 1);
			}
		} else {
			// Scroll up
			if (currentStep > 0) {
				setCurrentStep(currentStep - 1);
			}
		}
	};

	const scrollToSection = () => {
		const section = stepsRefs[currentStep]?.current;
		if (section) {
			const sectionRect = section.getBoundingClientRect();
			const containerElement = section.parentElement;
			const containerRect = containerElement.getBoundingClientRect();

			const scrollTop =
				sectionRect.top -
				containerRect.top +
				containerElement.scrollTop -
				(containerRect.height - sectionRect.height) / 2;

			containerElement.scrollTop = scrollTop;
		}
	};

	return { handleWheel, stepsRefs, currentStep };
};
