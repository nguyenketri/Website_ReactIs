import React, { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup khi component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Thời gian hiện tại:</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}
