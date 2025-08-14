const initialGameBoard = [ 
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export default function GameBoard({ whoisPlaying, turns }) {
 
  let x = initialGameBoard.map(row => [...row]);

  for (const turn of turns) {
    const { square, player } = turn;
    const { col, row } = square;
    x[row][col] = player; 
  }

  return (
    <ol id="game-board">
      {x.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => whoisPlaying(rowIndex, colIndex)}
                  disabled={playerSymbol !== null} // prevent overwriting
                >
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
