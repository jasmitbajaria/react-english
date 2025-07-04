import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
  };

  const decValue = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>Jasmit learning React</h1>
      <h1>Counter:{count}</h1>
      <button onClick={addValue}>Increment value</button> {"  "}
      <button onClick={decValue}>Decrement value</button>
    </>
  );
}

export default App;
