import {useCallback, useEffect, useState} from 'react';

export default function useCountDown() {
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    if (secondsLeft <= 0) {
      return;
    }

    const timeout = setTimeout(() => {
      setSecondsLeft(s => s - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [secondsLeft]);

  const start = useCallback((seconds: number) => {
    setSecondsLeft(seconds);
  }, []);

  return {start, secondsLeft};
}
