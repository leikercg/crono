import { Estadio } from './components/Estadio'
import { MainCrono } from './components/MainCrono';
import './App.css'
import { useState } from 'react';

function App() {

const [isRunning,setIsRunning]=useState(false);
  return (
    <>
      <div>
        <h1>Tiempo de juego</h1>
      </div>
      <MainCrono isRunning={isRunning} setIsRunning={setIsRunning}/>
      <Estadio isRunning={isRunning} setIsRunning={setIsRunning}/>


    </>
  )
}

export default App
