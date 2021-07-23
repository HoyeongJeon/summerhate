import React, { useState, useEffect } from "react";
import "Styles/Clock.css";
import { IClock } from "./Interface";

export const Clock: React.FC = () => {
  const date = new Date();
  const [clock, setClock] = useState<IClock>({
    hour: date.getHours(),
    minute: date.getMinutes(),
    seconds: date.getSeconds(),
  });

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock({
        hour: date.getHours(),
        minute: date.getMinutes(),
        seconds: date.getSeconds(),
      });
    }, 1000);
    return clearInterval();
  }, []);

  return (
    <div className="Clock">
      <h1>
        {clock.hour < 10 ? `0` + clock.hour : clock.hour} :
        {clock.minute < 10 ? `0` + clock.minute : clock.minute} :
        {clock.seconds < 10 ? `0` + clock.seconds : clock.seconds}
      </h1>
    </div>
  );
};
