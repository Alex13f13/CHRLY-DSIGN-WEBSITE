import { css } from "styled-components";
import { fadeIn, fadeOut, moveLeft, moveRight, scaleIn, scaleOut } from "./keyframes";

export const animations = {
	default: css``,
	fadeIn: css`
		animation: ${fadeIn} 0.5s ease-in-out forwards;
	`,
	fadeOut: css`
		animation: ${fadeOut} 0.5s ease-in-out forwards;
	`,
	moveLeft: css`
		animation: ${moveLeft} 2s linear infinite;
	`,
	moveRight: css`
		animation: ${moveRight} 2s linear infinite;
	`,
	scaleIn: css`
		animation: ${scaleIn} 0.5s ease-in-out forwards;
	`,
	scaleOut: css`
		animation: ${scaleOut} 0.5s ease-in-out forwards;
	`,
};
