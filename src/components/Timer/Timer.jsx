import React, { useState, useEffect } from "react";

function Timer(props) {
  const [seconds, setSeconds] = useState(0);
  const [isWaldoFound, setIsWaldoFound] = useState(false);

  

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isWaldoFound) {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isWaldoFound]);

  const handleWaldoFound = () => {
    setIsWaldoFound(true);
  };

  useEffect(() => {
    if (props.waldoFound) {
      handleWaldoFound();
    }
  }, [props.waldoFound]);

  useEffect(() => {
    if (isWaldoFound) {
      props.onTimePassed(seconds);
    }
  }, [isWaldoFound, seconds, props]);

  return (
    <div>
      <p>Time: {seconds}</p>
    </div>
  );
}

export default Timer;
