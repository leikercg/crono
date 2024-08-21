import { Crono } from "./Crono"
export const Estadio = ({ isRunning, setIsRunning }) => {// Esta prop sirve para poder darle una clase al contenedor padre.

  return (//usa
    <div className="estadio" >
      <div className='campo'>
        <Crono isRunning={isRunning} setIsRunning={setIsRunning} isPlaying={true} ></Crono>
        <Crono isRunning={isRunning} setIsRunning={setIsRunning} isPlaying={true}></Crono>
      </div>
      <div className='banco'>

        <Crono isRunning={isRunning} setIsRunning={setIsRunning} isPlaying={false}></Crono>
      </div>

    </div>)
}