import React from 'react'
import './TicTacToe.css'
import { useRef } from 'react';
import { useState } from 'react';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

export const TicTacToe = () => {

  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  let titleRef = useRef(null);

  const toggle = (e, num) => {
    if(lock){
      return 0;
    }
 
    if(count%2 === 0) {
      e.target.innerHTML =`<img src='${cross_icon}'>`;
      data[num] = "X";
      setData([...data]);
      setCount(count + 1);
    }
    else {
      e.target.innerHTML =`<img src='${circle_icon}'>`;
      data[num] = "O";
      setData([...data]);
      setCount(count + 1);
    }   
    checkWin();
  }


  const checkWin = () => {
    if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
      won(data[0]);
    }
    else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
      won(data[3]);
    } 
    else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
      won(data[6]);
    }       
    else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
      won(data[0]);
    }   
    else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
      won(data[1]);
    }   
    else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
      won(data[2]);
    }
    else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){ 
      won(data[0]);
    } 
    else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
      won(data[2]);    
    } 
  }

  const won = (winner)=>{
    setLock(true);
    if(winner==="X"){
      titleRef.current.innerHTML = "Player 1 wins";
    }
    else{
      titleRef.current.innerHTML = "Player 2 wins";
    } 
  }

  const reset=()=>{
    setLock(false);
    setCount(0);
    setData(["", "", "", "", "", "", "", "", ""]);
    titleRef.current.innerHTML = "Tic Tac Toe game in <span>React</span>";
    
    // Clear all box elements
    const boxes = document.querySelectorAll('.boxes');
    boxes.forEach(box => {
      box.innerHTML = "";
    });
  }
  return (
    <div className="container">
       <h1 className='title' ref={titleRef}>Tic Tac Toe game in <span>React</span> </h1>
       <div className="board">
          <div className="row1">
              <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
              <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
              <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div> 
          </div>
          <div className="row2">
              <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
              <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
              <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div> 
          </div>
          <div className="row3">
              <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
              <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
              <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div> 
          </div>                          
          </div>
       <button className='reset-btn' onClick={reset}>Reset Game</button>
    </div>
  )
}
