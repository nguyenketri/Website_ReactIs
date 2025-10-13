import { useState, useEffect } from "react";
import { formatTimeAdvanced, getSecondsLeft } from "utils/time.js";

const FlashSales = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState(getSecondsLeft(endTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getSecondsLeft(endTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return <div className="flash-sales">{timeLeft > 0 ? formatTimeAdvanced(timeLeft) : "Ended"}</div>;
};

export default FlashSales;
