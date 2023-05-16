import { useRef } from 'react';

export const useDelay = (delay = 200) => {
  const timeoutId = useRef(null);

  const clearDelay = action => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    const newTimeoutId = setTimeout(() => {
      action && action();
    }, delay);

    timeoutId.current = newTimeoutId;
  };

  return clearDelay;
};
