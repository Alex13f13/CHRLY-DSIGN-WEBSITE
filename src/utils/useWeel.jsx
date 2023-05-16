/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useElementScroll } from "./useElementScroll";

export const useWeel = (sectionRefs = []) => {
	const [currentSection, setCurrentSection] = useState(0);
	const [isContainerScrolling, handleScroll] = useElementScroll();

	useEffect(() => scrollToSection(), [currentSection]);

	const handleWheel = (e) => {
		if (isContainerScrolling()) return;
		handleScroll();

		const { deltaY } = e;
		if (deltaY > 0) {
			// Scroll down
			if (currentSection < sectionRefs.length - 1) {
				setCurrentSection(currentSection + 1);
			}
		} else {
			// Scroll up
			if (currentSection > 0) {
				setCurrentSection(currentSection - 1);
			}
		}
	};

	const scrollToSection = () => {
		const section = sectionRefs[currentSection]?.current;
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return { handleWheel, sectionRefs, currentSection };
};
