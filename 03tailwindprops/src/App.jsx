// src/App.jsx
import { useState } from "react";
import "./App.css";
// Correct the import: Component names are always capitalized
import Card from "./components/Card"; // Assuming your file is named Card.jsx

function App() {
  const [count, setCount] = useState(0); // This state isn't used, but kept as per your original code

  return (
    <>
      {/* This h1 will be the first item in the column, perfectly centered */}
      <h1 className="text-3xl bg-green-300 p-3 rounded">Welcome to My App</h1>
      {/* The Card component will be the second item, perfectly centered below the h1 */}
      <Card username="Jasmit Bajariya" />
      <Card />
    </>
  );
}

export default App;
