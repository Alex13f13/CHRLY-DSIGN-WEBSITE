/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
	height: 400vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Box = styled.div`
	width: 300px;
	height: 300px;
	background-color: ${({ isVisible }) => (isVisible ? "blue" : "red")};
	transition: opacity 1s ease-out;
	opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
`;

const PruebaComp = () => {
	const [isVisible, setIsVisible] = useState(false);
	const domRef = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => setIsVisible(entry.isIntersecting));
			},
			{ threshold: 1 }
		);

		observer.observe(domRef.current);

		return () => {
			observer.unobserve(domRef.current);
		};
	}, []);

	return (
		<StyledSection>
			<Box ref={domRef} isVisible={isVisible} />
		</StyledSection>
	);
};

export default PruebaComp;
