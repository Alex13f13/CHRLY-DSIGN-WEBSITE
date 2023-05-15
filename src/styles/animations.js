import { css } from 'styled-components';

export const animations = {
	fades: css`
		@keyframes fadeIn {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}

		@keyframes fadeOut {
			from {
				opacity: 1;
			}
			to {
				opacity: 0;
			}
		}
	`,

	slides: css`
		@keyframes slideIn {
			from {
				transform: translateX(-100%);
			}
			to {
				transform: translateX(0);
			}
		}

		@keyframes slideOut {
			from {
				transform: translateX(0);
			}
			to {
				transform: translateX(-100%);
			}
		}

		@keyframes slideInRight {
			from {
				transform: translateX(100%);
			}
			to {
				transform: translateX(0);
			}
		}

		@keyframes slideOutRight {
			from {
				transform: translateX(0);
			}
			to {
				transform: translateX(100%);
			}
		}

		@keyframes slideInLeft {
			from {
				transform: translateX(-100%);
			}
			to {
				transform: translateX(0);
			}
		}

		@keyframes slideOutLeft {
			from {
				transform: translateX(0);
			}
			to {
				transform: translateX(-100%);
			}
		}
	`,
};
