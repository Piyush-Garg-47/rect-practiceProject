import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import { useState } from 'react';

function GamePlay() {
    const [score , setScore] = useState(0) ; 
    const [selectedNumber , setSelectedNumber] = useState() ; 
     const [currentDice , setCurrentDice] = useState(1) ; 
     const [error , setError] = useState("") ;  

     const generateRandomNumber = (min , max) =>{
        return Math.floor(Math.random() * (max - min ) + min) ; 
    }

    const roleDice =() =>{
        if(!selectedNumber){
            setError("You have not selected any number yet !!") ; 
            return 
        } 
        setError("") ; 
        const randomNumber =  generateRandomNumber(1 , 7) ; 
        setCurrentDice((prev) => randomNumber)
              
        if(selectedNumber == randomNumber ){
            setScore((prev) => prev + randomNumber)
        }else{
            setScore((prev)=> prev - 2)
        }

        setSelectedNumber(undefined) ; 
    }

  return (
    <MainContainer>
     <div className='top_section'>
     <TotalScore score = {score}/>
     <NumberSelector error = {error} setError = {setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/> 
     </div>
     <RoleDice currentDice = {currentDice} roleDice={roleDice}/>
    </MainContainer>
  )
}

export default GamePlay ;

const MainContainer = styled.div`
padding-top : 70px ; 
 .top_section{
 display : flex ; 
 justify-content :space-around  ; 
 align-items : center ; 
 }
` ; 