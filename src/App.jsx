import { act, useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations"

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function driveActivePlayer(gameTurns){
  let currPlayer = 'X';
  if(gameTurns.length>0 && gameTurns[0].player === 'X'){
    currPlayer='O';
  }
  return currPlayer;
}

function App() {
  const [gameTurns,setGameTurns] = useState([]);
  const currentPlayer = driveActivePlayer(gameTurns);
  let winner;
  let gameBoard = initialBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if(firstSquareSymbol && secondSquareSymbol===firstSquareSymbol && thirdSquareSymbol===secondSquareSymbol){
      winner = firstSquareSymbol;
    }
  }

  function handleSelectSquare(rowIndex,colIndex){
    setGameTurns((prevTurns)=>{
      const currPlayer = driveActivePlayer(prevTurns);

      const updatedTurns=[
        {square:{row:rowIndex,col:colIndex},player:currPlayer},
        ...prevTurns
      ];

      return updatedTurns;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player 1" symbol="X" isActive={currentPlayer === 'X'}/>
          <Player initialName="player 2" symbol="O" isActive={currentPlayer === 'O'}/>
        </ol>
        
        {winner && <p>You won {winner}</p>}
        <GameBoard onSelectSqaure={handleSelectSquare} board={gameBoard}/>
      </div>

      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
