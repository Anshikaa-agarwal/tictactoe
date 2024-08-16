import React, { useState } from 'react'
import Cell from './Cell'
import './board.css'
import Reset from './Reset';
export default function Board() {
    const [value, setValue] = useState(Array(9).fill(null));
    const [xTurn, setXTurn] = useState(true);
    const [isLock, setIsLock] = useState(false);
    const [count, setCount] = useState(1);
    const [winner, setWinner] = useState(null);
    const [message, setMessage] = useState("");

    console.log(value);

    const handleOnClick = (index) => {
      console.log(count)
        if(!isLock && !value[index]) {
            const copyValue = [...value];
            if(count%2===0) 
                setXTurn(true);
            else
            setXTurn(false);
            copyValue[index] = xTurn ? "X" : "O";
            setValue(copyValue);
            setCount(count+1);

          const winning = checkWinner(copyValue);
          if(winning) {
            setWinner(winning);
            setIsLock(true);
            setMessage(`Congratulations, ${winning} won!`)
          }

          if(count===9 && !winning) {
            setMessage("Match drawn");
            setIsLock(true)
          }
        }
    }

    const checkWinner = (squares) => {
      const winningCombo = [
        [0,1,2],
        [3,4,5], 
        [6,7,8],
        [0,3,6], 
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]

      for(let i=0; i<winningCombo.length; i++) {
        const [a,b,c] = winningCombo[i];
        if(squares[a] && squares[a]===squares[b] && squares[b]===squares[c]) {
          return squares[a];
        }
      }

      return null;
    }

    const handleReset = () => {
        setValue(Array(9).fill(null));
        setXTurn(true);
        setIsLock(false);
        setCount(1);
        setWinner(null);
        setMessage('');
    }


  return (
    <>
    <h1 className='heading'>TIC-TAC-TOE</h1>
    <div className='board'>
      <div className="row">
        <Cell onClick = {() => handleOnClick(0)} value = {value[0]}/>
        <Cell onClick = {() => handleOnClick(1)} value = {value[1]}/>
        <Cell onClick = {() => handleOnClick(2)} value = {value[2]}/>
      </div>
      <div className="row">
        <Cell onClick = {() => handleOnClick(3)} value = {value[3]}/>
        <Cell onClick = {() => handleOnClick(4)} value = {value[4]}/>
        <Cell onClick = {() => handleOnClick(5)} value = {value[5]}/>
      </div>
      <div className="row">
        <Cell onClick = {() => handleOnClick(6)} value = {value[6]}/>
        <Cell onClick = {() => handleOnClick(7)} value = {value[7]}/>
        <Cell onClick = {() => handleOnClick(8)} value = {value[8]}/>
      </div>
    </div>
    <div className="message">{message}</div>
    <Reset handleReset={handleReset}/>
    </>
  )
}
