import React, { useState, useEffect } from 'react';

function Clock(props) {
  const [location] = useState(props.location);
  const [time, setTime] = useState(getTimeWithOffset(props.offset));

  function getTimeWithOffset(offset) {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(
      currentTime.setHours(currentTime.getHours() + offset + utcOffset)
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeWithOffset(props.offset));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [props.offset]);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time.toLocaleTimeString()}</div>
    </div>
  );
}

export default Clock;
