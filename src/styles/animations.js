import { css } from "styled-components";
import { fadeIn, fadeOut } from "./keyframes";

export const animations = {
	none: css``,
	fadeIn: css`
		animation: ${fadeIn} 0.5s ease-in-out forwards;
	`,
	fadeOut: css`
		animation: ${fadeOut} 0.5s ease-in-out forwards;
	`,
};
