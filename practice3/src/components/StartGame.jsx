import React from 'react'
import styled from 'styled-components' ; 

function StartGame({toggle}) {
  return (
    <Container>
       <div className='image'>
       <img src="/images/6d3e531201ecd44ca61f9d27ff82e0ae.png" alt="dice png" />
       </div>
        <div className='content'>
            <h1>Dice Game</h1> 
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame ; 

const Container = styled.div`
max-width :1180px ; 
 display :flex ; 
 height :100vh ; 
 margin : 0 auto ; 
 align-items:center ; 
 gap :20px ; 

 .content{
   h1{
   font-size : 96px ; 
   }
 }
` ;

const Button = styled.button`
display:flex ; 
color: white ; 
padding :10px 18px ; 
justify-content :center ; 
gap :10px ; 
width :140px ; 
height :48px ; 
font-size :13px ; 
background-color :black ; 
border-radius :5px ; 
min-width : 220px ; 
border-radius:none ;
 border :1px solid transparent; 
 transition :0.5s ease-in ;   
cursor : pointer ; 

&:hover{
background-color : white;
border :1px solid black ; 
color :black ; 
transition :0.3s ease-in ;  
}
`;