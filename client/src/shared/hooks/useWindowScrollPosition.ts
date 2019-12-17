import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const DEFAULT_THROTTLE = 100;

interface WindowScrollPosition {
  x: number;
  y: number;
}

interface WindowScrollPositionOptions {
  throttleWait: number;
}

const getPosition = (): WindowScrollPosition => ({
  x: window.pageXOffset,
  y: window.pageYOffset,
});

export const useWindowScrollPosition = ({
  throttleWait
}: WindowScrollPositionOptions = { throttleWait: DEFAULT_THROTTLE }): WindowScrollPosition => {
  const [position, setPosition] = useState(getPosition());
  useEffect(() => {
    const handleScroll = throttle(() => {
      setPosition(getPosition());
    }, throttleWait);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return position;
}