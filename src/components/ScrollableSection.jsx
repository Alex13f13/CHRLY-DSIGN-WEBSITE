import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledSection = styled.div`
	width: 100%;
	height: 60vh;
	overflow-x: hidden;
	overflow-y: scroll;
	display: flex;
	flex-direction: row;
`;

// eslint-disable-next-line react/prop-types
export const ScrollableSection = ({ slices = [1, 2, 3, 4, 5, 6] }) => {
	const [sectionWidth, setSectionWidth] = useState(0);
	const [visibleSlice, setVisibleSlice] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			setSectionWidth(window.innerWidth);
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const renderedSlices = slices.map((slice, index) => {
		const position = index * sectionWidth;
		const sliceStyle = {
			width: sectionWidth,
			left: position,
			display: index === visibleSlice ? "block" : "none",
		};

		return (
			<div key={index} style={sliceStyle}>
				{slice}
			</div>
		);
	});

	const handleScroll = (event) => {
		const { scrollLeft } = event.target;
		const newVisibleSlice = Math.floor(scrollLeft / sectionWidth);
		setVisibleSlice(newVisibleSlice);
	};

	return <StyledSection onScroll={handleScroll}>{renderedSlices}</StyledSection>;
};
