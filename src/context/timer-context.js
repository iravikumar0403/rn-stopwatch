import { React, createContext, useContext, useState, useRef } from 'react';

const initialState = {
  hh: 0,
  mm: 0,
  ss: 0,
};

const tick = prevState => {
  if (prevState.ss < 59) {
    return { ...prevState, ss: prevState.ss + 1 };
  } else if (prevState.mm < 59) {
    return { ...prevState, mm: prevState.mm + 1, ss: 0 };
  } else {
    return { hh: prevState.hh + 1, mm: 0, ss: 0 };
  }
};

const TimerContext = createContext({
  time: initialState,
  startTimer: () => {},
  stopTimer: () => {},
  createLap: () => {},
});

const TimerProvider = ({ children }) => {
  const [time, setTime] = useState(initialState);
  const [laps, setLaps] = useState([]);
  const [isTimerRunning, setIsRunning] = useState(false);
  const intervalId = useRef(null);

  const startTimer = () => {
    setIsRunning(true);
    intervalId.current = setInterval(() => {
      setTime(prev => tick(prev));
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalId.current);
    setIsRunning(false);
  };

  const createLap = () => {
    setLaps(prev => [time, ...prev]);
  };

  const resetTimer = () => {
    setLaps([]);
    setTime({
      hh: 0,
      mm: 0,
      ss: 0,
    });
  };

  return (
    <TimerContext.Provider
      value={{
        time,
        laps,
        isTimerRunning,
        startTimer,
        stopTimer,
        createLap,
        resetTimer,
      }}>
      {children}
    </TimerContext.Provider>
  );
};

const useTimer = () => useContext(TimerContext);

export { TimerProvider, useTimer };
