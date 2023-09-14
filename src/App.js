import { useState } from "react";


// Component for a single square.
// Each square is a single button styled to look like a white square.
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={ onSquareClick }>
      { value }
    </button>
  );
}


export default function Board() {

  // State boolean for determing whether O or X is next.
  const [xIsNext, setXIsNext] = useState(true);

  // As an initial value, an array is created having nine elements each set to null.
  const [squares, setSquares] = useState( Array(9).fill( null ) );

  // Event handler for when a square is slicked.
  function handleClick(i) {
    // If the elem is not null, it is already O/X, and thus don't continue.
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();  // Creates copy of the squares array.
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  // Check to see if there is a winner and display status.
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {/* The value in each Square is an elem index in the squares array.
            The same elem index is passed to the click event handler. */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}