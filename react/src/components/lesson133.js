import { useEffect, useState } from "react";

const Lesson133 = () => {
  const [isStop, setIsStop] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let ID = null;
    if (!isStop) {
      ID = window.setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      window.clearInterval(ID);
    };
  }, [isStop]);

  const toggleTimer = () => {
    setIsStop((prev) => !prev);
  };

  const reset = () => {
    setTime(0);
  };
  return (
    <>
      <p>{time}秒経過</p>
      <button onClick={toggleTimer}>{isStop ? "スタート" : "一時停止"}</button>
      <button onClick={reset}>リセット</button>
    </>
  );
};

export default Lesson133;
