import { useEffect, useState } from "react";
export const Crono = ({ isRunning, setIsRunning, isPlaying }) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isNamed, setIsNamed] = useState(false);

    // Cronometro@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    console.log(isPlaying);

    useEffect(() => {
        let timer;
        if (isNamed ) {// Si tiene escrito algo
            if (isRunning && isPlaying) { // Si ha sido pulsado start
                timer = setInterval(() => {
                    setSeconds(prevSeconds => {
                        if (prevSeconds >= 5) {
                            setMinutes(prevMinutes => prevMinutes + 1);
                            return 0;
                        }
                        return prevSeconds + 1;
                    });
                }, 1000);
                setIsNamed(true);
            }
        } else {
            setIsRunning(false);
        }

        // Limpiar el intervalo cuando el componente se desmonte o cuando cambien sus dependencias
        return () => clearInterval(timer);
    }, [isRunning, isNamed]);




    // Controlar input con nombre
    const handleChange = (event) => {
        const value = event.target.value.trim();
        setIsNamed(value.length >= 3);
    };

    return (
        <div className="personalCrono">
            <input type="text" placeholder="Nombre" onChange={handleChange} readOnly={( seconds!=0 || isRunning || minutes!=0) ? true : false} />
            <div>
                <h3>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</h3>
            </div>
        </div>
    );


}