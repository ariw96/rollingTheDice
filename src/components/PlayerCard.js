import {Button, Card,ProgressBar,Stack } from 'react-bootstrap';
import React from "react";


export default function PlayerCard({playerScore,playerName,lastScore,winScore,bgColor,roundScore}) {
    
  return (
<Card className={bgColor}>
<Card.Body >
<Card.Title className='d-flex justify-content-between align-baseline fw-normal mb-3' >
    <div className='me-2'>
  <h1>{playerName + isWinner(playerScore,winScore)}</h1>
 
    </div>
</Card.Title>
<ProgressBar className='rounded-pill' animated max={winScore} now={playerScore} variant="warning"  />
<Stack direction= "horizontal" gap="2" className="mt-4">
<Button variant="secondary">total score:{playerScore}</Button>
<Button variant="secondary">Round score:{roundScore}</Button>
<Button variant="secondary">last roll:{lastScore}</Button>
</Stack>
</Card.Body>
</Card>
    )
}
function isWinner(playerScore,winScore){
    if(playerScore>=winScore){
        return " is the Winner"
    }
    return ""
}

 