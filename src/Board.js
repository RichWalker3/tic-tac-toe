import './Board.css';
import Square from './Square.js';
import React, { useState } from 'react';

function Board() {

  const initialBoard = {1:'-',2:'|',3:'-',4:'|',5:'-',6:'|',7:'-',8:'|',9:'-'}
  const firstTurn = 'x'
  initialBoard.turn = firstTurn
  const [grid, setGrid] = useState(initialBoard);
  
  const squares = []
  for (let i = 1; i < 10; i += 1) {
      const square = <Square className='square' key={i} num={i} grid={grid} setGrid={setGrid} />
      squares.push(square)
  }
  return (
    <div className='Board'>
        {squares}
    </div>
  );
}

export default Board;