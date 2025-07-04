import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-300 p-3 rounded">Welcome to My App</h1>
    </>
  );
}

export default App;
