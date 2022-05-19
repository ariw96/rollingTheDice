import React from "react";
import Container from 'react-bootstrap/Container';
import PlayerCard from "./PlayerCard";
import "./Player.css";

function Player({playerScore1,playerScore2,lastScore1,lastScore2,winScore,bgColor1,bgColor2,roundScore1,roundScore2}){ 
return (
 <Container className="my-4">
  
<h1 className='me-auto'>{"Roll some dice"}</h1>
<h2> {`First to reach ${winScore} is the winner`}</h2>
<h2>{`If you roll a double you get double score`}</h2>
<h2>{`If you roll a double six you going back to last score`}</h2>

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
  gap: '5rem',
  alignItems: 'flex-start',
}}>
<PlayerCard roundScore={roundScore1} playerScore={playerScore1} playerName="Ari" lastScore={lastScore1} winScore={winScore} bgColor={bgColor1}></PlayerCard>
<PlayerCard  roundScore={roundScore2} playerScore={playerScore2}  playerName="Hilel" lastScore={lastScore2} bgColor={bgColor2}></PlayerCard>
</div>
</Container>
)
}
export default Player;
