import { useEffect, useRef, useState } from "react";

const MultableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<null | number>(null);

  const stopTimer = () => {
    if (!interValRef.current) return;
    window.clearInterval(interValRef.current);
  };

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  });
  return (
    <div>
      Hook timer - {timer} -
      <button onClick={() => stopTimer()}>Stop timer</button>
    </div>
  );
};

export default MultableRef;
