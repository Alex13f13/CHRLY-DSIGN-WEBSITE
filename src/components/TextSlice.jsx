/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { THEME } from "../utils/constants";
import { animations } from "../styles/animations";
import { textTypes } from "../styles/textTypes";
import { ANIMATION, TEXT_TYPE } from "../utils/constants";
import { forwardRef } from "react";
import { colors } from "../styles/colors";

const StyledTextSlice = styled.div`
	${(props) => textTypes[props?.textStyles]}
	color: ${(props) =>
		props?.sliceActive ? "" : props?.theme === THEME.primary ? colors.darkGray : colors.lightGray};
	${(props) => (props?.sliceActive ? animations[props?.animIn] : animations[props?.animOut])}
	${(props) => props?.textExtraStyles}
`;

const TextSliceBase = (
	{
		animIn = ANIMATION.default,
		animOut = ANIMATION.default,
		textStyles = TEXT_TYPE.paragraph,
		sliceActive = true,
		textExtraStyles = css``,
		theme,
		children,
	},
	ref
) => {
	return (
		<StyledTextSlice
			textStyles={textStyles}
			animIn={animIn}
			animOut={animOut}
			theme={theme}
			sliceActive={sliceActive}
			textExtraStyles={textExtraStyles}
			ref={ref}
		>
			{children}
		</StyledTextSlice>
	);
};

export const TextSlice = forwardRef(TextSliceBase);
