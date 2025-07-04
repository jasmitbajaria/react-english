import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "../components/Login";
import Profile from "../components/profile";
import UserContextProvider from "../context/UserContextProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <App />
    </UserContextProvider>
  );
}

export default App;
