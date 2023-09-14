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

  // As an initial value, an array is created having nine elements each set to null.
  const [squares, setSquares] = useState( Array(9).fill( null ) );

  // Event handler for when a square is slicked.
  function handleClick(i) {
    const nextSquares = squares.slice();  // Creates copy of the squares array.
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
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
