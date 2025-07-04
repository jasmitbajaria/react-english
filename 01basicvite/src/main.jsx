import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const acutualReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google"
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
