import React, { useState, useEffect } from "react";

const Discountdown = () => {
  const [seconds, setSeconds] = useState(30);
  const [minutes, setMinutes] = useState(59);
  const [hours, setHours] = useState(23);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          setHours(hours - 1);
          setMinutes(59);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <button className="discountdown-container">
      <span>{hours < 10 ? "0" + hours : hours} : </span>
      <span>{minutes < 10 ? "0" + minutes : minutes} : </span>
      <span>{seconds < 10 ? "0" + seconds : seconds}</span>
    </button>
  );
};

export default Discountdown;
