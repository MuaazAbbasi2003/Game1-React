import Player from "./Components/Player"; 
import GameBoard from "./Components/GameBoard";
import { useState } from "react";
import Log from "./Components/Log";

function heleper101(turnsBefore) {
  let haramiPLayer = "X";
  if (turnsBefore.length > 0 && turnsBefore[0].player === "X") {
    haramiPLayer = "O";
  }
  return haramiPLayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const whichPlayer = heleper101(gameTurns);

  function changeWhichPlayer(rowIndex, colIndex) {
    setGameTurns((turnsBefore) => {
      const chacha = heleper101(turnsBefore);
      const newTurn = {
        square: { col: colIndex, row: rowIndex },
        player: chacha
      };
      return [newTurn, ...turnsBefore];
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player pName="Player 1" pSymbol="X" isActive={whichPlayer === "X"} />
          <Player pName="Player 2" pSymbol="O" isActive={whichPlayer === "O"} />
        </ol>
        <GameBoard whoisPlaying={changeWhichPlayer} turns={gameTurns} />
      </div>
      <Log pakistan={gameTurns} />
    </main>
  );
}

export default App;
