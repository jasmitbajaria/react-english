import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setcolor] = useState("gray");

  const changeColor = (color) => {
    setcolor(color);
  };

  return (
    <div
      className="width-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg p-3 rounded-3xl bg-white">
          <button
            className="bg-red-300 rounded-2xl px-4 py-1 shadow"
            onClick={() => changeColor("red")}
          >
            Red
          </button>
          <button
            className="bg-green-300 rounded-2xl px-4 py-1 shadow-lg"
            onClick={() => changeColor("green")}
          >
            Green
          </button>
          <button
            className="bg-blue-300 rounded-2xl px-4 py-1  shadow-lg "
            onClick={() => changeColor("blue")}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
