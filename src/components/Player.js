import React from "react";
import Container from 'react-bootstrap/Container';
import PlayerCard from "./PlayerCard";
import "./Player.css";

function Player({playerScore1,playerScore2})  { 
return (
 <Container className="my-4">
  
<h1 className='me-auto'>Roll some dice</h1>

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
  gap: '5rem',
  alignItems: 'flex-start',
}}>
<PlayerCard  playerScore={playerScore1} playerName="Ari"></PlayerCard>
<PlayerCard   playerScore={playerScore2}  playerName="Hilel"></PlayerCard>
</div>
</Container>
)
}
export default Player;
