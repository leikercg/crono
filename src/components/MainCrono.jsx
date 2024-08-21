import { useEffect, useState } from "react";
export const MainCrono = ({isRunning,setIsRunning}) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);


  // Cronometro@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds >= 5) {
            setMinutes(prevMinutes => prevMinutes + 1);
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    }


    // Limpiar el intervalo cuando el componente se desmonte o cuando cambien sus dependencias
    return () => clearInterval(timer);
  }, [isRunning]);





  return (
    <div className="customButtons">
      <div>
        <h3>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</h3>
        <div>
          <button onClick={() => setIsRunning(true)}>Start</button>
          <button onClick={() => setIsRunning(false)}>Stop</button>
        </div>

      </div>
    </div>
  );


}