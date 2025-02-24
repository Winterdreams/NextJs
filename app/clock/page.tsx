"use client";
import { useState, useEffect, useRef } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() =>{
    setHasMounted(true);
    //every 1000misisecond update the state of time
    const intervalId = setInterval(() => setTime(new Date), 1000);
    
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  function formatTime(){
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM"

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  }

  function padZero(number: number){
    return (number < 10 ? "0" : "") + number;
  }

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0)
  const intervalIdRef = useRef<number | NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() =>{
    if(isRunning){
      intervalIdRef.current = setInterval(()=> {setElapsedTime(Date.now() - startTimeRef.current )}, 10);
    }

    return () => {
      if (intervalIdRef.current !== null) {
        clearInterval(intervalIdRef.current);
      }
    };

  }, [isRunning]);

  function start(){
    setIsRunning(true);

    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop(){
    setIsRunning(false);
  }

  function reset(){
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime2(){
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    const hoursStr = String(hours).padStart(2, "0");
    const minutesStr = String(minutes).padStart(2, "0");
    const secondsStr = String(seconds).padStart(2, "0");
    const millisecondsStr = String(milliseconds).padStart(2, "0");

    return `${minutesStr}:${secondsStr}:${millisecondsStr}`;
  }


  return (
    <>
    <div className="clock-container bg-black h-screen w-full flex items-center justify-center">
      <div className="clock font-bold [text-shadow:_0_4px_8px_#00BCD4]  text-center p-10  text-yellow-300 py-10 text-9xl ">Current time<br></br>
      {hasMounted ? (
        <>
        <span className="text-[#00BCD4] text-8xl">{formatTime()}</span>
        <br></br><br></br>
        <div className="stopwatch text-yellow-300 py-10 text-9xl">StopWatch
        <div className="display text-red-500 px-10 py-10 text-8xl">{formatTime2()}</div>
        <div className="controls p-5 flex gap-6 items-center justify-center text-4x1">
          <button onClick={start} className="start-button text-3xl text-white px-10 py-5 rounded-2xl bg-blue-600">Start</button>
          <button onClick={stop} className="stop-button text-3xl text-white px-10 py-5 rounded-2xl bg-red-600">Stop</button>
          <button onClick={reset} className="reset-button text-3xl text-white px-10 py-5 rounded-2xl bg-blue-600">Reset</button>
        </div>
      </div>
        {/* <p>{time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p> */}
        </>
      ) : (
        <p>Loading...</p> // Prevents hydration mismatch
      )}
      </div>
    </div>

    </>
  );
};

export default Clock;