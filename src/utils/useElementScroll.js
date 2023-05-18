import { useRef } from 'react';
import { useDelay } from './useDelay';

export const useElementScroll = () => {
  const isScrolling = useRef(null);
  const handleDelay = useDelay(500);

  const handleScroll = () => {
    if (isScrolling.current) return;
    isScrolling.current = true;
    handleDelay(() => (isScrolling.current = false));
  };

  return [() => isScrolling.current, handleScroll];
};
