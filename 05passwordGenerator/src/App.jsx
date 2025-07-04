import { useCallback, useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";

    let pass = "";
    for (let i = 1; i < length; i++) {
      let randomNum = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomNum);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded py-3 text-blue-950">
      <h1 className="text-3xl bg-cyan-100 py-3 text-center mb-3 w-full shadow-1xl">
        Password Generator
      </h1>
      <div className="flex shadow-1xl overflow-hidden py-2 px-3 mb-3 rounded-2xl">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-2 bg-cyan-100 rounded-l-2xl"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="outline-none bg-green-200 px-3 py-0.5 hover:bg-green-300 shrink-0 rounded-r-2xl "
          onClick={copyPassword}
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2 ">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer "
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numbers"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="characters"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="char">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
