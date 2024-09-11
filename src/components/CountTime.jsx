import { useState, useEffect } from 'react';

function CountTime() {
  const [days, setDays] = useState(701);
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(45);
  const [seconds, setSeconds] = useState(39);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      } else if (hours > 0) {
        setSeconds(59);
        setMinutes(59);
        setHours(hours - 1);
      } else if (days > 0) {
        setSeconds(59);
        setMinutes(59);
        setHours(23);
        setDays(days - 1);
      } else {
        clearInterval(intervalId);
        // You can add logic to display a message when the countdown is over here
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds, minutes, hours, days]);

  return (
    <div className="text-white p-4 rounded-md">
      <div className="flex flex-wrap justify-center gap-4 lg:gap-20">
        <div className=" flex flex-col text-center">
          <span className="text-4xl font-bold">{days}</span>
          <span className="text-sm">DAYS</span>
        </div>
        <div className=" flex flex-col text-center">
          <span className="text-4xl font-bold">{hours}</span>
          <span className="text-sm">HOURS</span>
        </div>
        <div className=" flex flex-col text-center">
          <span className="text-4xl font-bold">{minutes}</span>
          <span className="text-sm">MINUTES</span>
        </div>
        <div className=" flex flex-col text-center">
          <span className="text-4xl font-bold">{seconds}</span>
          <span className="text-sm">SECONDS</span>
        </div>
      </div>
    </div>
  );
}

export default CountTime;