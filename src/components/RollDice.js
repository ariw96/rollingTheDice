import React,{useState} from "react";
import Die from "./Die";
import Player from "./Player";
import PlayerCard from "./PlayerCard";
import "./RollDice.css";
import {Button ,Stack} from 'react-bootstrap';


const RollDice = ({sides})=>{
    const [state,setState] = useState({
        die1:"one",
        die2:"three",
        rolling:false,
        totalScore:0,
        playerScore1:0,
        playerScore2:0,
        curPlayer:"player1",
    });
    const {die1,die2,rolling,totalScore,playerScore1,curPlayer,playerScore2} = state;
    const roll = ()=>{
        const  newDie1 = sides[Math.floor(Math.random()*6)+1];
        const  newDie2 = sides[Math.floor(Math.random()*6)+1];
        const score1 = Object.values(newDie1)
        const score2 = Object.values(newDie2)
        const score=score1[0]+score2[0] 
        setState({
            die1:Object.keys(newDie2),
            die2:Object.keys(newDie1),
            rolling:true,
            totalScore:score,
            playerScore1:curPlayer==="player1"?playerScore1+score:playerScore1,
            playerScore2:curPlayer==="player2"?playerScore2+score:playerScore2,
            curPlayer:curPlayer,
        });
        
        setTimeout(()=>{
            setState((prevState)=>({
                ...prevState,
                rolling:false,
            }))
        },1000);
    };
    const hold = ()=>{
        setState((prevState)=>({ 
            ...prevState,
            curPlayer:curPlayer==="player1"?"player2":"player1",
        }));
    }
    return (
        <>
       
    
        <Player playerScore1={playerScore1} playerScore2={playerScore2}/>
         <div className="roll-dice">
            <div className="rolldice-container">
            <Die face={String(die1)} rolling={rolling} />
            <Die face={String(die2)} rolling={rolling}  />
             </div>
             <Stack  gap="2" className="mt-4">

             <Button onClick={roll} disabled={rolling}>
                 {rolling ? "Rolling..." : "Roll Dice"}
             </Button>
            
              <Button onClick={hold}>
                 {"Hold"}
             </Button>
              <Button >
                  Score:{totalScore}
             </Button>
             </Stack>
          
         </div>
        </>
    );
    };  
RollDice.defaultProps = {
    sides:[
        {one:1},
        {two:2},
        {three:3},
        {four:4},
        {five:5},
        {six:6},
    ],
};

export default RollDice;