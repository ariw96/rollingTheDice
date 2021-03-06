import React,{useState} from "react";
import Die from "./Die";
import Player from "./Player";
import PlayerCard from "./PlayerCard";
import "./RollDice.css";
import {Button ,Stack,Form} from 'react-bootstrap';


const RollDice = ({sides})=>{
    const [winScore, setValue] = useState(20);
    const onChange = (event) => {
        setValue(event.target.value);
    };
    const [state,setState] = useState({
        die1:"one",
        die2:"three",
        rolling:false,
        totalScore:0,
        playerScore1:0,
        playerScore2:0,
        curPlayer:"player1",
        lastScore1:0,
        lastScore2:0,
        lastScore:0,
        roundScore1:0,
        roundScore2:0,
        bgColor1:"bg-primary",
        bgColor2:"",
        isDouble:false,
    });
    const {die1,die2,rolling,lastScore,roundScore1,roundScore2,isDouble,playerScore1,curPlayer,playerScore2,lastScore1,lastScore2,bgColor1,bgColor2} = state;
    const roll = ()=>{
        const  newDie1 = sides[Math.floor(Math.random()*6)+1];
        const  newDie2 = sides[Math.floor(Math.random()*6)+1];
        const score1 = Object.values(newDie1)
        const score2 = Object.values(newDie2)
        const score=score1[0]+score2[0] 
        const double = (score1[0]===score2[0])?true:false;
        if (score>11){
            switchPlayer();
            return <div>{`${curPlayer} rolled a ${score}`}</div>
        }
     
        setState({
            die1:Object.keys(newDie2),
            die2:Object.keys(newDie1),
            rolling:true,
            lastScore:score,
            playerScore1:curPlayer==="player1"?getScore1(score,playerScore1,isDouble,roundScore1):playerScore1,
            playerScore2:curPlayer==="player2"?getScore2(score,playerScore2,isDouble,roundScore2):playerScore2,
            roundScore1:curPlayer==="player1"?getRoundScore1(score,roundScore1,isDouble):roundScore1,
            roundScore2:curPlayer==="player2"?getRoundScore2(score,roundScore2,isDouble):roundScore2,
            lastScore1:curPlayer==="player1"?score:lastScore1,
            lastScore2:curPlayer==="player2"?score:lastScore2,
            curPlayer:curPlayer,
            winScore:winScore,
            bgColor1:bgColor1,
            bgColor2:bgColor2,
            isDouble:double,
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
            bgColor1:curPlayer==="player1"?"":"bg-primary",
            bgColor2:curPlayer==="player2"?"":"bg-primary",
            roundScore1:0,
            roundScore2:0,
            lastScore1:0,
            lastScore2:0,
        }));
    }
    
   const switchPlayer = ()=>{
        setState((prevState)=>({
            ...prevState,
            curPlayer:curPlayer==="player1"?"player2":"player1",
            bgColor1:curPlayer==="player1"?"":"bg-primary",
            bgColor2:curPlayer==="player2"?"":"bg-primary",
            playerScore1:playerScore1-roundScore1,
            playerScore2:playerScore2-roundScore2, 
            lastScore1:0,
            lastScore2:0,
        }));
        setState((prevState)=>({
            ...prevState,
            roundScore1:0,  
            roundScore2:0, 
        }));
    }

    const getScore1 = (score,playerScore1,isDouble)=>{  
        return   isDouble?playerScore1+=score*2:playerScore1+=score;
    }
    const getScore2 = (score,playerScore2,isDouble)=>{
        return isDouble?playerScore2+=score*2:playerScore2+=score;
    }
    const getRoundScore1 = (score,roundScore1,isDouble)=>{
        return isDouble?roundScore1+=score*2:roundScore1+=score;
    }
    const getRoundScore2 = (score,roundScore1,isDouble)=>{
    return isDouble?roundScore1+=score*2:roundScore1+=score;
    }
  if(playerScore1>=winScore){
      return <body className="winner">
          <div>
          <h1>player1 is the winner</h1>
          <Button variant="primary" onClick={()=>{window.location.reload()}}>Play Again</Button>
          </div>
      </body>
  }
  if(playerScore2>=winScore){
      return <body className="winner">
            <div>
          <h1>player2 is the winner</h1>
          <Button variant="primary" size="lg" onClick={()=>{window.location.reload()}}>Play Again</Button>
            </div>
      </body>
  }
    return (
        <>
       
        <Player playerScore1={playerScore1} roundScore1={roundScore1} roundScore2={roundScore2} playerScore2={playerScore2} lastScore1={lastScore1} lastScore2={lastScore2} winScore={winScore} bgColor1={bgColor1} bgColor2={bgColor2} />
         <body className="roll-dice">
            <div className="rolldice-container">
            <Die face={String(die1)} rolling={rolling} />
            <Die face={String(die2)} rolling={rolling}  />
             </div>
             <Stack  gap="2" className="mt-4" >
                 <form className="form">
                 <label>Set score </label>
                <input type="number" placeholder="win Score"  value={winScore} onChange={onChange}/>
                 </form>

             <Button onClick={roll} disabled={rolling}>
                 {rolling ? "Rolling..." : "Roll Dice"}
             </Button>
            
              <Button onClick={hold}>
                 {"Hold"}
             </Button >
               </Stack>
          
         </body>
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