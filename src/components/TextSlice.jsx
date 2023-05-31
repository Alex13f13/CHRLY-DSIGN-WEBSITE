/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { THEME } from "../utils/constants";
import { animations } from "../styles/animations";
import { textTypes } from "../styles/textTypes";
import { ANIMATION, TEXT_TYPE } from "../utils/constants";

const StyledTextSlice = styled.div`
	${(props) => textTypes[props?.textStyles]}
	${(props) =>
		props?.sliceActive ? "" : props?.theme === THEME.primary ? "color: #202024" : "color: #E3E3E3"};
	${(props) => (props?.sliceActive ? animations[props?.animIn] : animations[props?.animOut])}
	${(props) => props?.textExtraStyles}
`;

export const TextSlice = ({
	animIn = ANIMATION.default,
	animOut = ANIMATION.default,
	textStyles = TEXT_TYPE.description,
	sliceActive = true,
	textExtraStyles = css``,
	theme,
	children,
}) => {
	return (
		<StyledTextSlice
			textStyles={textStyles}
			animIn={animIn}
			animOut={animOut}
			theme={theme}
			sliceActive={sliceActive}
			textExtraStyles={textExtraStyles}
		>
			{children}
		</StyledTextSlice>
	);
};
