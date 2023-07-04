import { css } from 'styled-components';
import { colors } from './colors';

export const themes = {
	primary: css`
		background-color: ${colors.black};
		color: ${colors.white};
	`,
	secondary: css`
		background-color: ${colors.white};
		color: ${colors.black};
	`,
};
