
import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay' 

function App() {
  
  const [isGameStarted , setIsGameStarted] = useState(true) ;

  const toggleGameplay = () =>{
    setIsGameStarted((prev) => !prev) ; 
  } ; 

  return (
   <> { isGameStarted ? <GamePlay/> : <StartGame  toggle = {toggleGameplay} />}</>
  )
}

export default App ;
