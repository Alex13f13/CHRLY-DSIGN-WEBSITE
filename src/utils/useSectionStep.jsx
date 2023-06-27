import { useSearchParams } from "react-router-dom";

export const useSectionStep = () => {
	const [searchParams] = useSearchParams();
	const sectionName = searchParams?.get("section");

	const sections = {
		works: 10,
		evolve: 8,
		awards: 12,
		whatwedo: 1,
	};

	return sections[sectionName] || 0;
};
