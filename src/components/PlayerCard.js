import {Button, Card,ProgressBar,Stack } from 'react-bootstrap';
import React from "react";


export default function PlayerCard({playerScore}) {

  return (
<Card >
<Card.Body>
<Card.Title className='d-flex justify-content-between align-baseline fw-normal mb-3' >
    <div className='me-2'>
  <h1>ARI</h1>
    </div>
</Card.Title>
<ProgressBar className='rounded-pill' animated  now={playerScore} />
<Stack direction= "horizontal" gap="2" className="mt-4">
<Button variant="outline-primary">current score:{playerScore}</Button>
<Button variant="secondary">Hold</Button>
</Stack>
</Card.Body>
</Card>
    )
}

 