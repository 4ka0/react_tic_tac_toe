import { useState } from "react";

function Square() {

  // This is a state variable.
  // "value" stores the value.
  // "setValue" is a function that can be used to change the value.
  // "null" passed to useState is the initial value for this state variable.
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X")
  }

  return (
    <button
      className="square"
      onClick={ handleClick }
    >
        { value }
    </button>
  )
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
