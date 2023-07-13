import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const moveLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100px);
  }
`;

export const moveRight = keyframes`
  from {
    transform: translateX(-100px);
  }
  to {
    transform: translateX(0);
  }
`;

export const scaleIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.5);
  }
`;

export const scaleOut = keyframes`
  from {
    transform: scale(1.5);
  }
  to {
    transform: scale(1);
  }
`;
