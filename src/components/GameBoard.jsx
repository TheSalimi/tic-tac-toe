import { useState } from "react";

export default function GameBoard({ onSelectSqaure, board }) {
  

  // const [gameBoard,setGameBoard] = useState(initialBoard);

  // function handleOnClick(rowIdx,colIdx){
  //   setGameBoard((prevBoard)=>{
  //     const updatedBoard = [...prevBoard.map(innerArray=>[...innerArray])];
  //     updatedBoard[rowIdx][colIdx]=activePlayer;
  //     return updatedBoard;
  //   });

  //   onSelectSqaure();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button 
                onClick={() => onSelectSqaure(rowIndex, colIndex)}
                disabled={playerSymbol!=null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
