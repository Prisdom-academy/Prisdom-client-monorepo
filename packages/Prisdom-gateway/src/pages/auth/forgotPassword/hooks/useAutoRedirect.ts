import { useState, useEffect } from 'react';

export function useAutoRedirect(redirectFn: () => void, time = 20) {
  const [autoMoveTime, setAutoMoveTime] = useState(time);
  useEffect(() => {
    setInterval(() => {
      if (time === 0) {
        redirectFn();
      }
      time -= 1;
      setAutoMoveTime(time);
    }, 1000);
  }, []);

  return {
    autoMoveTime
  };
}
