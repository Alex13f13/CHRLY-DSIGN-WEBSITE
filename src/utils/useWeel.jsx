/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useWeel = (sectionRefs = []) => {
	// const [isScrolling, setIsScrolling] = useState(false);
	const [currentSection, setCurrentSection] = useState(0);

	useEffect(() => scrollToSection(), [currentSection]);

	const handleWheel = (e) => {
		// if (isScrolling) return;

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

	return { handleWheel, sectionRefs };
};
