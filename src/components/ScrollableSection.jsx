/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState } from "react";
import { THEME, ANIMATION, TEXT_TYPE } from "../utils/constants";
import { useTheme } from "../styles/ThemeContext";
import { animations } from "../styles/animations";
import { textTypes } from "../styles/textTypes";

const StyledSection = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: start;
	overflow: hidden;
`;

const TextSlice = styled.div`
	${(props) =>
		props.sliceActive ? "" : props.theme === THEME.primary ? "color: #202420" : "color: #E3E3E3"};
	${(animationType) => animations[animationType]}
	${(textStyles) => textTypes[textStyles]}
`;

export const ScrollableSection = ({
	texts = [],
	animationType = ANIMATION.fades,
	textStyles = TEXT_TYPE.description,
}) => {
	const { theme } = useTheme();
	const [sliceActive, setSliceActive] = useState(0);

	// setInterval(() => {
	// 	let indice = sliceActive + 1;

	// 	if (sliceActive >= texts.length) {
	// 		indice = 0;
	// 	}

	// 	setSliceActive(indice);
	// }, 2000);

	return (
		<StyledSection>
			{texts?.map((paragraph, index) => (
				<TextSlice
					textStyles={textStyles}
					animationType={animationType}
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
