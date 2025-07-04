import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import Card from "../components/Card";
import ThemeBtn from "../components/ThemeBtn";
import { ThemeProvider } from "../contexts/theme";
import { useEffect } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  // useEffect(() => {
  //   document.querySelector("html").classList.remove("dark", "light");
  //   document.querySelector("html").classList.add(themeMode);
  // }, [themeMode]);

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      // Remove both 'dark' and 'light' to avoid conflicts.
      htmlElement.classList.remove("dark", "light");
      // Add the current themeMode class.
      htmlElement.classList.add(themeMode);
    }
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300 font-sans">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto  dark:bg-gray-900 ">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
